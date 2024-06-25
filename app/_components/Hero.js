import Image from "next/image"
import key from "@/public/key.svg"
import map from "@/public/map.svg"
import repair from "@/public/repair.svg"
import logo from "@/public/2.png"

const tabs = [
  {
    id: 876543,
    title: "Programmation de clés",
    p: "Solutions expertes de programmation de clés pour votre confort et votre tranquillité d'esprit.",
    svg: key
  },
  {
    id: 3456789,
    title: "Service de diagnostics mobile",
    p: "Notre service vous apporte des solutions de diagnostic complètes directement à votre emplacement.",
    svg: map
  },
  {
    id: 57965789,
    title: "Réparations par un expert",
    p: "Réparations effectuées par un professionnel pour assurer la fiabilité et la performance de votre véhicule.",
    svg: repair
  }
]

function Hero() {
  return (
    <div className="flex flex-col w-full items-center gap-4 gradient-background py-12 px-5">
      <div className=" text-center px-2 md:px-0">
        <h1 className="text-3xl md:text-6xl md:leading-relaxed text-gray-100 mb-8 md:mb-0">Diagnostics à la demande</h1>
      </div>
      <div className="max-w-[50rem] px-6 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">
        <Image src={logo} alt="Auto Diag 44 logo" className="w-44 md:w-80" />
        <p className="text-base md:text-lg text-center md:text-start leading-snug text-gray-100 max-w-[20rem] md:max-w-[23rem]">Services professionnels de diagnostics automobiles et de programmation de clés à votre porte.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-12 mt-6 md:mt-16 mb-10">
        {tabs.map(({ id, title, p, svg }) => (
          <div key={id} className="flex flex-col max-w-[26rem] items-center text-gray-100 backdrop-filter backdrop-blur-3xl backdrop-sepia-[55%] px-4 py-6 mx-2  rounded-xl shadow-xl">
            <Image src={svg} width={40} height={40} alt={title} className="mb-4" />
            <h2 className="font-semibold text-base md:text-lg mb-4 text-center">{title}</h2>
            <p className="text-center text-sm md:text-base">{p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
