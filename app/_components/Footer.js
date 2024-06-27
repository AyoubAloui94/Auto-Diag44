"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import FooterForm from "./FooterForm"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

function Footer() {
  const pathname = usePathname()
  const showForm = pathname !== "/contact"

  return (
    <footer className="bg-[#000000] text-primary-100 py-12 px-10">
      <div className={`grid grid-cols-1 md:grid-cols-2 ${showForm ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-10`}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Auto-Diag 44</h1>
          <p>Expert en diagnostics automobiles pour plus de 140 marques.</p>
          <p>SIRET: 40863730400028</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Zone d&apos;intervention</h1>
          <p>Active dans la région de la Loire-Atlantique (44)</p>
          <p>Service fiable et rapide directement à votre emplacement.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Service</h1>
          <p>
            <Link href={"mailto:contact@autodiag44.com"} className="flex gap-1 items-center hover:underline hover:underline-offset-4">
              <EnvelopeIcon className="h-5 w-5" />
              contact@autodiag44.com
            </Link>
          </p>
          <p>
            <Link href={"tel:0652682429"} className="flex gap-1 items-center hover:underline hover:underline-offset-4">
              <PhoneIcon className="h-5 w-5" />
              06 52 68 24 29
            </Link>
          </p>
        </div>
        {showForm ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Besoin d&apos;aide?</h1>
            <p>Décrivez brièvement votre problème</p>
            <FooterForm />
          </div>
        ) : null}
      </div>
      <div className="flex md:justify-start mt-8">
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} <Link href={"/"}>Auto-Diag 44. </Link>Tous droits réservés
        </p>
      </div>
    </footer>
  )
}

export default Footer
