import About from "../_components/About"

export const metadata = {
  title: "À propos",
  description: "Apprenez-en plus sur Auto-Diag 44 à Nantes et en Loire-Atlantique, votre spécialiste en diagnostics automobiles, réparation et programmation de clés. Découvrez notre mission et notre engagement envers la satisfaction client.",
  alternates: {
    canonical: "/about"
  }
}

function Page() {
  return (
    <div>
      <About />
    </div>
  )
}

export default Page
