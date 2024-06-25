import ContactForm from "../_components/ContactForm"
import OpeningHours from "../_components/OpeningHours"

export const metadata = {
  title: "Contact"
}

function Page() {
  return (
    <div className="mx-auto max-w-[30rem] lg:max-w-[90rem] my-12 flex flex-col gap-8">
      <h1 className="text-center text-3xl md:text-4xl mb-8 px-8">Besoin d&apos;un coup de main ?</h1>
      <OpeningHours />
      <ContactForm />
    </div>
  )
}

export default Page
