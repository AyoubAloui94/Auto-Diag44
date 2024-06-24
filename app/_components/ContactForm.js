"use client"

import Image from "next/image"
import img from "@/public/photo-3.webp"
import emailjs from "@emailjs/browser"
import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"
import { useSearchParams } from "next/navigation"
import { toast } from "react-hot-toast"
import { useRef } from "react"

function ContactForm() {
  const searchParams = useSearchParams()
  const problem = searchParams.get("description")
  const formRef = useRef()

  async function handleEmail(formData) {
    try {
      const data = Object.fromEntries(formData)

      const { name, phone, email, carMake, model, description } = data

      if (!name || !phone || !carMake || !model || !description) throw new Error("Veuillez remplir les champs obligatoires du formulaire")

      const params = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_car_make: carMake,
        user_car_model: model,
        message: description,
        to_name: "Aziz"
      }

      await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, params, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      })

      toast.success("Demande envoyée avec succès! nous vous contacterons dans les plus brefs délais")

      formRef.current?.reset()
    } catch (error) {
      let errMsg
      if (error?.status === 429) errMsg = `Veuillez réessayer plus tard.`
      else errMsg = error?.text || error?.message
      toast.error(errMsg)
      console.log(error)
    }
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-5 md:px-0 lg:gap-0">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center">
        <form ref={formRef} className="flex flex-col gap-1 bg-[#A3D9FF] rounded-2xl py-14 pb-8 px-8 max-w-[25em] md:max-w-[30rem]" action={handleEmail}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name">Nom*</label>
              <input id="name" name="name" placeholder="name" className="rounded-xl py-3 px-5 mb-3 w-full" required />
            </div>
            <div>
              <label htmlFor="phone">Téléphone*</label>
              <input id="phone" name="phone" placeholder="numero" className="rounded-xl py-3 px-5 mb-3 w-full" required />
            </div>
          </div>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" placeholder="(facultatif)" className="rounded-xl py-3 px-5 mb-3" />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="car-make">Marque*</label>
              <input id="car-make" name="carMake" placeholder="marque" className="rounded-xl py-3 px-5 mb-3 w-full" required />
            </div>
            <div>
              <label htmlFor="year-model">Année/Modèle*</label>
              <input id="year-model" name="model" placeholder="Modèle" className="rounded-xl py-3 px-5 mb-3 w-full" required />
            </div>
          </div>
          <label htmlFor="description">Brève description du problème*</label>
          <textarea id="description" defaultValue={problem} name="description" placeholder="description" className="rounded-xl py-3 px-5 mb-3" required />
          <div className="text-center">
            <Button />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <Image src={img} alt="car headlight" className="object-cover max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[27rem] rounded-2xl lg:rounded-none lg:rounded-r-xl aspect-video lg:aspect-square" />
      </div>
    </div>
  )
}

function Button() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="rounded-full py-3 px-5 bg-[#336699] text-gray-100" disabled={pending}>
      {!pending ? "Envoyer" : <SpinnerMini />}
    </button>
  )
}

export default ContactForm
