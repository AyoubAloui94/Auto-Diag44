import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 px-10">
      <div className="grid grid-cols-4 gap-10">
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
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Placeholder</h1>
          <p>describe problem here</p>
          <form className="flex flex-col gap-4">
            <textarea placeholder="type problem here" className="px-2 py-3 rounded-lg text-gray-900" />
            <div>
              <button type="submit" className="rounded-full py-3 px-5 bg-[#336699]">
                Besoin d&lsquo;aide?
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
