import Link from "next/link"

function NotFound() {
  return (
    <div className="text-center space-y-6 my-10">
      <h1 className="text-3xl font-semibold mb-9">404 - Page introuvable</h1>
      <Link href="/" className="outline-1 outline rounded-full py-3 px-8 text-primary-100 bg-brand-black hover:bg-brand-blue transition-colors duration-300">
        Accueil
      </Link>
    </div>
  )
}

export default NotFound
