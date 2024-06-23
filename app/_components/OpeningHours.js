function OpeningHours() {
  return (
    <div className="max-w-[60rem] mx-auto grid grid-cols-2">
      <div className="">
        <p>Pour toute question ou pour prendre rendez-vous, n&lsquo;hésitez pas à nous contacter via le formulaire de contact ci-dessous ou par téléphone au 07 83 88 27 86. </p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h1>Horaires de service :</h1>
          <p>Lundi - Vendredi : 9h00 - 18h00</p>
          <p>Samedi : 9h00 - 13h00</p>
          <p>Dimanche : Fermé</p>
        </div>
      </div>
    </div>
  )
}

export default OpeningHours
