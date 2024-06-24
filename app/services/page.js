import ServicesPresentation from "../_components/ServicesPresentation"

export const metadata = {
  title: "Services"
}

function Page() {
  return (
    <div className=" flex flex-col gap-8">
      <ServicesPresentation />
    </div>
  )
}

export default Page
