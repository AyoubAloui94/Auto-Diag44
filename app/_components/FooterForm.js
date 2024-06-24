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
      <textarea maxLength={100} name="description" id="description" placeholder="type problem here" className="px-2 py-3 rounded-lg text-gray-900" />
      <div>
        <button type="submit" className="rounded-full py-3 px-5 bg-[#336699]">
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default FooterForm
