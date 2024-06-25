import Image from "next/image"
import img1 from "@/public/photo-1.webp"
import img2 from "@/public/photo-2.webp"
import ActionButton from "./ActionButton"

function Presentation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mb-16 px-6 max-w-[30rem] lg:max-w-[90rem] mx-auto">
      <div className="flex flex-col gap-3 lg:justify-between items-start">
        <h1 className="text-3xl">Diagnostic complet pour plus de 140 marques de voitures</h1>
        <p className="text-justify">Notre service de diagnostic complet couvre plus de 140 marques de voitures, vous garantissant une analyse précise et fiable de votre véhicule. Faites confiance à notre expertise pour identifier et résoudre rapidement tous vos problèmes automobile.</p>

        <ActionButton>Demandez un devis</ActionButton>
      </div>
      <Image src={img1} width={"auto"} height={"auto"} alt="mercedes hands on stirring wheel" className="object-cover object-top rounded-lg h-96" />
      <Image src={img2} width={"auto"} height={"auto"} alt="mercedes sports car" className="object-cover rounded-lg object-top h-96" />
    </div>
  )
}

export default Presentation
