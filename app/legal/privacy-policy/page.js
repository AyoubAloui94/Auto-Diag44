import Link from "next/link"

export const metadata = {
  title: "Politique de confidentialité",
  description: "Apprenez comment Auto-Diag 44 protège vos informations personnelles avec notre Politique de confidentialité. Contactez-nous pour plus de détails.",
  alternates: {
    canonical: "/legal/privacy-policy"
  },
  openGraph: {
    description: "Apprenez comment Auto-Diag 44 protège vos informations personnelles avec notre Politique de confidentialité. Contactez-nous pour plus de détails.",
    url: "https://www.autodiag44.com/legal/privacy-policy"
  }
}

function Page() {
  return (
    <div className="my-16 max-w-[90rem] mx-auto px-10 lg:px-20 text-center md:text-justify">
      <div className="max-w-[30rem] md:max-w-full mx-auto">
        <h1 className="text-3xl text-center font-semibold mb-6">Politique de confidentialité</h1>
        <H2>1. Introduction</H2>
        <P>Auto-Diag 44 s&apos;engage à protéger votre vie privée. Cette Politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.</P>

        <H2>2. Informations que nous collectons</H2>
        <P>Nous collectons les informations personnelles que vous nous fournissez via notre formulaire de contact, telles que votre nom, votre adresse email et votre numéro de téléphone. Nous ne collectons aucune autre donnée personnelle.</P>

        <H2>3. Utilisation de vos informations</H2>
        <P>Nous utilisons vos informations personnelles pour fournir et améliorer nos services, traiter vos demandes et communiquer avec vous à propos de vos rendez-vous et de nos services. Nous n&apos;utilisons pas vos informations à des fins de marketing sans votre consentement explicite.</P>

        <H2>4. Partage de vos informations</H2>
        <P>Nous ne partageons pas vos informations personnelles avec des tiers, sauf si cela est nécessaire pour fournir nos services (par exemple, le traitement des paiements) ou si la loi l&apos;exige.</P>

        <H2>5. Sécurité des données</H2>
        <P>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, divulgation, modification ou destruction non autorisés.</P>

        <H2>6. Vos droits</H2>
        <P>
          Vous avez le droit d&apos;accéder à vos informations personnelles, de les corriger ou de les supprimer. Vous pouvez également vous opposer au traitement de vos données ou demander que nous en restreignions l&apos;utilisation. Pour exercer ces droits, veuillez nous contacter à{" "}
          <Link href="mailto:contact@autodiag44.com" className="hover:underline hover:underline-offset-4 text-brand-blue">
            contact@autodiag44.com
          </Link>{" "}
          ou au 06 52 68 24 29.
        </P>

        <H2>7. Modifications de cette politique</H2>
        <P>Nous pouvons mettre à jour cette Politique de confidentialité de temps en temps. Les modifications seront publiées sur notre site web et la politique révisée prendra effet immédiatement après sa publication.</P>

        <H2>8. Contactez-nous</H2>
        <P>
          Si vous avez des questions ou des préoccupations concernant cette Politique de confidentialité, veuillez nous contacter à{" "}
          <Link href="mailto:contact@autodiag44.com" className="hover:underline hover:underline-offset-4 text-brand-blue">
            contact@autodiag44.com
          </Link>{" "}
          ou au{" "}
          <Link href={"tel:0652682429"} className="hover:underline hover:underline-offset-4 text-brand-blue">
            06 52 68 24 29
          </Link>
          .
        </P>
      </div>
    </div>
  )
}

function H2({ children }) {
  return <h2 className="text-xl font-semibold mb-2">{children}</h2>
}

function P({ children }) {
  return <p className="text-lg mb-5">{children}</p>
}

export default Page
