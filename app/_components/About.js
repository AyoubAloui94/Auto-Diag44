import Image from "next/image"
import image1 from "@/public/photo-8.webp"
import image2 from "@/public/photo-9.webp"
import image3 from "@/public/photo-10.webp"
import Link from "next/link"
import ActionButton from "./ActionButton"

const sections = [
  {
    id: 65678,
    title: "Votre Expert Automobile en Loire-Atlantique",
    text: "Bienvenue chez Auto-Diag 44, votre expert de confiance en diagnostics automobiles, réparation et programmation de clés dans la région de la Loire-Atlantique. Avec des années d'expérience dans le domaine de l'automobile, nous sommes fiers d'offrir des services de haute qualité pour plus de 140 marques de véhicules.",
    image: image1,
    alt: "man driving",
    actionText: "Parlez à un expert"
  },
  {
    id: 65685,
    title: "Des Solutions Automobiles Rapides et Fiables",
    text: "Notre mission est de fournir des solutions rapides, fiables et pratiques pour tous vos besoins automobiles. Nous utilisons des technologies de pointe pour diagnostiquer et résoudre les problèmes de votre véhicule, garantissant ainsi une performance optimale et une tranquillité d'esprit. Que vous ayez besoin d'un diagnostic précis, de réparer une clé ou de la reprogrammer, nous sommes là pour vous offrir le meilleur service possible.",
    image: image2,
    alt: "car tire and screwdriver",
    actionText: "Besoin d'assistance ?"
  },
  {
    id: 65692,
    title: "Interventions sur Site pour Votre Confort",
    text: "Chez Auto-Diag 44, nous croyons en l'importance de la satisfaction du client. C'est pourquoi nous offrons des interventions sur site, vous permettant de bénéficier de nos services directement à votre emplacement. Notre expert qualifié se déplace rapidement pour diagnostiquer et réparer votre véhicule, vous épargnant ainsi le tracas de vous déplacer.",
    image: image3,
    alt: "car inside",
    actionText: "Planifiez une intervention"
  }
]

function About() {
  return (
    <div className="my-16 max-w-[90rem] mx-auto px-10 lg:px-20">
      <div className="max-w-[30rem] md:max-w-full mx-auto">
        {/* <h1 className="text-4xl text-center">À propos de nous</h1> */}
        <div className="my-10 text-center md:text-justify">
          {sections.map((section, index) => (
            <AboutSection key={section.id} {...section} index={index} />
          ))}
          <div className="flex flex-col gap-4 max-w-[90rem] mx-auto bg-slate-200 px-6 md:px-12 pt-4 pb-6 md:py-6 rounded-3xl">
            <p>Faites confiance à Auto-Diag 44 pour tous vos besoins en matière de diagnostics automobiles et de programmation de clés. Nous nous engageons à vous offrir des solutions efficaces et personnalisées pour que vous puissiez reprendre la route en toute sérénité.</p>
            <p>Pour toute question ou pour prendre rendez-vous, n&apos;hésitez pas à nous contacter. Nous sommes impatients de vous servir !</p>
            <div className="text-center mt-2 md:mt-5">
              <Link href={"/contact"} className="rounded-full py-3 px-5 border-solid border-2 text-primary-100 bg-brand-blue hover:bg-primary-100 hover:text-brand-blue  border-brand-blue  transition-colors duration-300">
                Obtenez de l&apos;aide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutSection({ text, image, alt, index, title, actionText }) {
  return (
    <div className="grid md:grid-cols-2 mb-10 gap-10">
      {index % 2 === 0 ? (
        <>
          <div className="flex flex-col order-1 md:-order-1 justify-between gap-4">
            <h1 className="text-2xl text-center md:text-start font-semibold">{title}</h1>
            <p className="leading-relaxed">{text}</p>
            <ActionButton>{actionText}</ActionButton>
          </div>
          <Image src={image} alt={alt} className="object-cover rounded-2xl aspect-video md:aspect-square lg:aspect-video object-top shadow-2xl" />
        </>
      ) : (
        <>
          <Image src={image} alt={alt} className="object-cover rounded-2xl aspect-video md:aspect-square lg:aspect-video object-top shadow-2xl" />
          <div className="flex flex-col justify-between gap-4">
            <h1 className="text-2xl text-center md:text-start font-semibold">{title}</h1>
            <p className="leading-relaxed">{text}</p>
            <ActionButton>{actionText}</ActionButton>
          </div>
        </>
      )}
    </div>
  )
}

export default About
