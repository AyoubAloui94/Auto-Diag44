import Link from "next/link"
import img from "@/public/notFound.png"
import Image from "next/image"

function NotFound() {
  return (
    <div className="text-center space-y-6 my-10">
      <h1 className="text-3xl font-semibold">404 - Page introuvable</h1>
      <div className="mx-auto max-w-48">
        <Image src={img} alt="not found image" className="mb-6" />
      </div>
      <Link href="/" className="outline-1 outline rounded-full py-3 px-8 text-primary-100 bg-brand-black hover:bg-brand-blue transition-colors duration-300">
        Accueil
      </Link>
    </div>
  )
}

export default NotFound
