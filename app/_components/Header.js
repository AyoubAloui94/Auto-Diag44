"use client"

import Logo from "@/app/_components/Logo"
import Navigation from "@/app/_components/Navigation"
import { useEffect, useState } from "react"

function Header() {
  const [sticky, setSticky] = useState("")

  useEffect(
    function () {
      window.addEventListener("scroll", isSticky)

      return () => {
        window.removeEventListener("scroll", isSticky)
      }
    },
    [sticky]
  )

  function isSticky() {
    const scrollTop = window.scrollY

    const stickyClass = scrollTop >= 120 ? "sticky top-0 bg-gray-50 z-10 shadow-2xl" : ""
    setSticky(stickyClass)
  }
  return (
    <header className={`border-b px-10 py-5 ${sticky}`}>
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center max-w-7xl mx-auto px-3">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
