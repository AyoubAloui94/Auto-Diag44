import Link from "next/link"

function OpeningHours() {
  return (
    <div className="max-w-[27.5rem] md:max-w-[40rem] lg:max-w-[60rem] mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-1 px-5 md:px-0">
      <div className="">
        <p className="text-justify">
          Pour toute question ou pour prendre rendez-vous, n&apos;hésitez pas à nous contacter via le formulaire de contact ci-dessous ou par téléphone au{" "}
          <Link href={"tel:0652682429"}>
            <span className="font-semibold underline underline-offset-2">0652682429</span>
          </Link>
          .{" "}
        </p>
      </div>
      <div className="flex flex-col lg:items-center">
        <div className=" lg:text-start">
          <h1 className="font-semibold">Horaires de service:</h1>
          <p>Lundi - Vendredi : 9h00 - 18h00</p>
          <p>Samedi : 9h00 - 13h00</p>
          <p>Dimanche : Fermé</p>
        </div>
      </div>
    </div>
  )
}

export default OpeningHours
