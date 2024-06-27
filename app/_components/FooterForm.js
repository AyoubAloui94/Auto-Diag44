"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

function FooterForm() {
  const router = useRouter()
  const formRef = useRef()

  function handleSubmit(formData) {
    const problem = formData.get("description")
    router.push(`/contact?description=${problem}`, { scroll: true })
    formRef.current.reset()
  }

  return (
    <form className="flex flex-col gap-4" action={handleSubmit} ref={formRef}>
      <textarea maxLength={100} name="description" id="description" placeholder="description" className="px-2 py-3 rounded-lg text-gray-900" />
      <div>
        <button type="submit" className="rounded-full py-3 px-5 my-1 border-solid border-2 border-brand-black bg-brand-blue hover:bg-primary-100 hover:text-brand-blue hover:border-solid hover:border-2 hover:border-brand-blue transition-colors duration-300">
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default FooterForm
