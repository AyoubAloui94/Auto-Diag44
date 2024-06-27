import image1 from "@/public/photo-6.webp"
import image2 from "@/public/photo-15.png"
import image3 from "@/public/photo-7.jpg"
import image4 from "@/public/photo-13.webp"
import image5 from "@/public/photo-14.webp"
import image6 from "@/public/photo-16.webp"
import ServiceCard from "./ServiceCard"

const services = [
  {
    title: "Diagnostic des problèmes automobiles",
    description: "Notre service de diagnostic utilise des outils modernes pour identifier rapidement et précisément les problèmes de votre véhicule. Bénéficiez d'une expertise fiable et de solutions efficaces pour assurer la performance et la sécurité de votre voiture.",
    image: image1,
    alt: "Diagnostic des problèmes automobiles"
  },
  {
    title: "Intervention à votre emplacement",
    description: "Notre expert se déplace directement à votre emplacement pour diagnostiquer et réparer votre véhicule rapidement. Profitez d'un service pratique et efficace, sans avoir à vous déplacer.",
    image: image2,
    alt: "Intervention à votre emplacement"
  },
  {
    title: "Programmation et réparation de clés",
    description: "Nous offrons des services de programmation et de réparation de clés pour tous types de véhicules. Notre expert garantit des solutions rapides et fiables pour remplacer ou reprogrammer vos clés en toute sécurité.",
    image: image3,
    alt: "Programmation et réparation de clés"
  },
  {
    title: "Accompagnement à l'achat de voiture d'occasion",
    description: "Notre expert vous accompagne lors de l'achat de votre voiture d'occasion pour diagnostiquer d'éventuels problèmes. Nous nous assurons que vous faites un achat en toute confiance, évitant ainsi les mauvaises surprises et les arnaques.",
    image: image4,
    alt: "Accompagnement à l'achat de voiture d'occasion"
  },
  {
    title: "Vidange et changement d'huile",
    description: "Nous offrons des services de vidange et de changement d'huile pour garantir le bon fonctionnement de votre véhicule. Faites confiance à notre expertise pour maintenir la performance et la longévité de votre moteur.",
    image: image5,
    alt: "Vidange et changement d'huile"
  },
  {
    title: "Assistance pour réussir le contrôle technique",
    description: "Nous vous aidons à préparer votre véhicule pour le contrôle technique, en identifiant et en résolvant les problèmes potentiels à l'avance. Assurez-vous de passer le contrôle sans encombre grâce à notre expertise et nos conseils professionnels.",
    image: image6,
    alt: "Assistance pour réussir le contrôle technique"
  }
]

function ServicesPresentation() {
  return (
    <div className="bg-brand-blue flex flex-col items-center px-10 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-16 text-primary-100">Nos Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[90rem] mx-auto">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  )
}

export default ServicesPresentation
