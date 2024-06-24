import image1 from "@/public/photo-6.webp"
import image2 from "@/public/photo-5.webp"
import image3 from "@/public/photo-7.jpg"
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
  }
]

function ServicesPresentation() {
  return (
    <div className="bg-[#9fd6fe] flex flex-col items-center px-10 py-16">
      <h1 className="text-4xl font-bold mb-16">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[90rem] mx-auto">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  )
}

export default ServicesPresentation
