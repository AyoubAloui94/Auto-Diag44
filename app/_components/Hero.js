const tabs = [
  {
    id: 876543,
    title: "Services de programmation de clés",
    p: "Solutions expertes de programmation de clés pour votre confort et votre tranquillité d'esprit."
  },
  {
    id: 3456789,
    title: "Service de diagnostics mobile",
    p: "Notre service vous apporte des solutions de diagnostic complètes directement à votre emplacement."
  },
  {
    id: 57965789,
    title: "Réparations de véhicules par un expert",
    p: "Réparations effectuées par un professionnel qualifié pour assurer la fiabilité et la performance de votre véhicule."
  }
]

function Hero() {
  return (
    <div className="flex flex-col w-full items-center gap-4 gradient-background py-12 px-6">
      <div className=" w-96 text-center">
        <h1 className="text-6xl leading-relaxed text-gray-100">Diagnostics à la demande</h1>
      </div>
      <div className="text-center w-96">
        <p className="text-lg text-center leading-snug text-gray-100">Services professionnels de diagnostics automobiles et de programmation de clés à votre porte.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0 mt-16 mb-10">
        {tabs.map(({ id, title, p }) => (
          <div key={id} className="flex flex-col justify-center max-w-[30rem] items-center text-gray-100 backdrop-filter backdrop-blur-3xl backdrop-sepia-[55%] px-4 py-14 mx-4 rounded-xl shadow-xl">
            <h2 className="font-semibold text-lg mb-4">{title}</h2>
            <p className="text-center">{p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
