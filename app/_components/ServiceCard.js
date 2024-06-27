import Image from "next/image"

function ServiceCard({ image, alt, title, description }) {
  return (
    <div className="bg-primary-100 bg-opacity-100 rounded-2xl shadow-2xl">
      <div className="flex flex-col ">
        <div>
          <Image src={image} alt={alt} className="object-cover rounded-t-2xl aspect-video" />
        </div>
        <div className=" rounded-b-2xl px-4 py-4 text-center">
          <h1 className="text-center text-lg font-semibold mb-4">{title}</h1>
          <p className="text-center md:text-justify">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
