import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src={logo} alt="Auto-Diag 44" width={120} className="" /> */}
      <span className="text-2xl font-semibold text-gray-900">Auto-Diag 44</span>
    </Link>
  )
}

export default Logo
