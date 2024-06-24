import Image from "next/image"

function ServiceCard({ image, alt, title, description }) {
  return (
    <div className="bg-[#fbfbfb] bg-opacity-90 rounded-2xl shadow-2xl">
      <div className="flex flex-col ">
        <div>
          <Image src={image} alt={alt} className="object-cover rounded-t-2xl aspect-video" />
        </div>
        <div className=" rounded-b-2xl px-4 py-4">
          <h1 className="text-lg font-semibold mb-1">{title}</h1>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
