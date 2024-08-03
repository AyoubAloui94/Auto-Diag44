import ServicesPresentation from "../_components/ServicesPresentation"

export const metadata = {
  title: "Services",
  description: "Découvrez les services d'Auto-Diag 44 à Nantes et en Loire-Atlantique, experts en diagnostics automobiles, réparation et programmation de clés pour plus de 140 marques. Profitez de notre assistance sur site.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    description: "Découvrez les services d'Auto-Diag 44 à Nantes et en Loire-Atlantique, experts en diagnostics automobiles, réparation et programmation de clés pour plus de 140 marques. Profitez de notre assistance sur site.",
    url: "https://www.autodiag44.com/services"
  }
}

function Page() {
  return (
    <div className=" flex flex-col gap-8">
      <ServicesPresentation />
    </div>
  )
}

export default Page
