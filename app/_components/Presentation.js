import Image from "next/image"
import Link from "next/link"
import img1 from "@/public/photo-1.webp"
import img2 from "@/public/photo-2.webp"

function Presentation() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-16 mb-16 mx-12">
      <div className="flex flex-col justify-between items-start">
        <h1 className="text-3xl">Car Diagnostics Company</h1>
        <p>Professional car diagnostics and key programming services provided at your convenience. Trust us for reliable solutions.</p>
        <div className="text-center">
          <Link href={"/contact"} className="outline-1 outline rounded-full py-3 px-8">
            Contact
          </Link>
        </div>
      </div>
      <Image src={img1} width={"auto"} height={"auto"} alt="mercedes hands on stirring wheel" className="object-cover object-top rounded-lg h-96" />
      <Image src={img2} width={"auto"} height={"auto"} alt="mercedes sports car" className="object-cover rounded-lg object-top h-96" />
    </div>
  )
}

export default Presentation
