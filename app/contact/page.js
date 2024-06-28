import ContactForm from "../_components/ContactForm"
import OpeningHours from "../_components/OpeningHours"

export const metadata = {
  title: "Contact",
  description: "Contactez Auto-Diag 44 à Nantes et en Loire-Atlantique pour tous vos besoins en diagnostics automobiles, réparation et programmation de clés. Notre expert se déplace à votre emplacement. Demandez un devis ou prenez rendez-vous dès aujourd'hui.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    description: "Contactez Auto-Diag 44 à Nantes et en Loire-Atlantique pour tous vos besoins en diagnostics automobiles, réparation et programmation de clés. Notre expert se déplace à votre emplacement. Demandez un devis ou prenez rendez-vous dès aujourd'hui.",
    url: "https://autodiag44.com/contact"
  }
}

function Page() {
  return (
    <div className="mx-auto max-w-[30rem] lg:max-w-[90rem] my-12 flex flex-col gap-8">
      <h1 className="text-center text-3xl md:text-4xl mb-8 px-8">Besoin d&apos;un coup de main ?</h1>
      <div className="max-w-[30rem] md:max-w-[40rem] lg:max-w-[60rem] mx-auto flex flex-col gap-8">
        <OpeningHours />
        <ContactForm />
      </div>
    </div>
  )
}

export default Page
