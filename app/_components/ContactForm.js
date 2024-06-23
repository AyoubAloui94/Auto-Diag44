import Image from "next/image"
import img from "@/public/photo-3.webp"

function ContactForm() {
  return (
    <div className="grid grid-cols-2 px-10 gap-0">
      <div className=" flex justify-end items-center">
        <form className="flex flex-col gap-1 bg-[#A3D9FF] rounded-2xl py-14 pb-8 px-8 max-w-[30rem]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name">Nom</label>
              <input id="name" placeholder="name" className="rounded-xl py-3 px-5 mb-3 w-full" />
            </div>
            <div>
              <label htmlFor="phone">Téléphone</label>
              <input id="phone" placeholder="numero" className="rounded-xl py-3 px-5 mb-3 w-full" />
            </div>
          </div>
          <label htmlFor="email">E-mail</label>
          <input id="email" placeholder="email" className="rounded-xl py-3 px-5 mb-3" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="car-make">Marque</label>
              <input id="car-make" placeholder="marque" className="rounded-xl py-3 px-5 mb-3 w-full" />
            </div>
            <div>
              <label htmlFor="year-model">Année/Modèle</label>
              <input id="year-model" placeholder="Modèle" className="rounded-xl py-3 px-5 mb-3 w-full" />
            </div>
          </div>
          <label htmlFor="description">Brève description du problème*</label>
          <textarea id="description" placeholder="Modele" className="rounded-xl py-3 px-5 mb-3" />
          <div className="text-center">
            <button className="rounded-full py-3 px-5 bg-[#336699] text-gray-100">Envoyer</button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-start">
        <Image src={img} alt="car headlight" height={600} className="object-cover rounded-r-xl aspect-square" />
      </div>
    </div>
  )
}

export default ContactForm
