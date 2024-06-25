import Link from "next/link"

function ActionButton({ children }) {
  return (
    <div className="text-center flex justify-center items-center w-full lg:w-auto">
      <Link href={"/contact"} className="outline-1 outline rounded-full py-3 px-8">
        {children}
      </Link>
    </div>
  )
}

export default ActionButton
