import Link from "next/link"

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <span className="text-2xl font-semibold text-gray-900">Auto-Diag 44</span>
    </Link>
  )
}

export default Logo
