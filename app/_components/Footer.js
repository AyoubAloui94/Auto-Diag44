"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import FooterForm from "./FooterForm"

function Footer() {
  const pathname = usePathname()
  const showForm = pathname !== "/contact"

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 px-10">
      <div className={`grid ${showForm ? "grid-cols-4" : "grid-cols-3"} gap-10`}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Auto-Diag 44</h1>
          <p>Expert en diagnostics automobiles pour plus de 140 marques.</p>
          <p className="uppercase text-xs">
            copyright © {new Date().getFullYear()} <Link href={"/"}>Auto-diag 44</Link>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Zone d&lsquo;intervention</h1>
          <p>Active dans la région de la Loire-Atlantique (44)</p>
          <p>Service fiable et rapide directement à votre emplacement.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Service</h1>
          <p>contact@autodiag44.com</p>
          <p>
            <Link href={"tel:0652682429"}>06 52 68 24 29</Link>
          </p>
        </div>
        {showForm ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Besoin d&lsquo;aide?</h1>
            <p>describe problem here</p>
            <FooterForm />
          </div>
        ) : null}
      </div>
    </footer>
  )
}

export default Footer
