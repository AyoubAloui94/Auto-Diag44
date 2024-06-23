import ContactForm from "../_components/ContactForm"
import OpeningHours from "../_components/OpeningHours"

export const metadata = {
  title: "Contact"
}

function Page() {
  return (
    <div className="mx-20 my-12 flex flex-col gap-8">
      <h1 className="text-center text-3xl mb-8">Besoin d&lsquo;un coup de main ?</h1>
      <OpeningHours />
      <ContactForm />
    </div>
  )
}

export default Page
