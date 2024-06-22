import Logo from "@/app/_components/Logo"
import Navigation from "@/app/_components/Navigation"

function Header() {
  return (
    <header className="border-b border-primary-900 px-10 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-3">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
