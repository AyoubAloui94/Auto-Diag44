"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  {
    path: "/",
    label: "Acceuil"
  },
  {
    path: "/services",
    label: "Services"
  },
  {
    path: "/about",
    label: "À propos"
  },
  {
    path: "/contact",
    label: "Contact"
  }
]

function Navigation() {
  const pathname = usePathname()

  const isActive = href => pathname === href

  return (
    <nav className="z-10 text-base">
      <ul className="flex gap-10 items-center">
        {routes.map(({ path, label }) => (
          <li key={path}>
            <Link href={path} className={`${isActive(path) ? "underline underline-offset-8" : "hover:text-gray-400 transition-colors"}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
