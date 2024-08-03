import Link from "next/link"

export const metadata = {
  title: "Conditions d'utilisation",
  description: "Découvrez les conditions d'utilisation des services de diagnostic automobile, de programmation et de réparation de clés d'Auto-Diag 44 en Loire-Atlantique.",
  alternates: {
    canonical: "/legal/terms-of-service"
  },
  openGraph: {
    description: "Découvrez les conditions d'utilisation des services de diagnostic automobile, de programmation et de réparation de clés d'Auto-Diag 44 en Loire-Atlantique.",
    url: "https://www.autodiag44.com/legal/terms-of-service"
  }
}

function Page() {
  return (
    <div className="my-16 max-w-[90rem] mx-auto px-10 lg:px-20 text-center md:text-justify">
      <div className="max-w-[30rem] md:max-w-full mx-auto">
        <h1 className="text-3xl text-center font-semibold mb-6">Conditions d&apos;utilisation</h1>
        <H2>1. Introduction</H2>
        <P>Bienvenue chez Auto-Diag 44. En utilisant notre site web et nos services, vous acceptez de respecter et d&apos;être lié par les termes et conditions suivants.</P>

        <H2>2. Services</H2>
        <P>Auto-Diag 44 fournit des services de diagnostic automobile, de programmation de clés et de réparation. Tous les services sont fournis à la discrétion d&apos;Auto-Diag 44 et sont soumis à disponibilité.</P>

        <H2>3. Rendez-vous et paiements</H2>
        <P>Tous les rendez-vous doivent être pris à l&apos;avance. Les paiements des services doivent être effectués au moment de la prestation, sauf accord contraire. Nous acceptons divers modes de paiement, y compris les espèces, les cartes de crédit et les méthodes de paiement en ligne.</P>

        <H2>4. Annulations et remboursements</H2>
        <P>Les annulations doivent être faites au moins 24 heures à l&apos;avance. À défaut, des frais d&apos;annulation peuvent être appliqués. Les remboursements sont traités au cas par cas et à la discrétion d&apos;Auto-Diag 44.</P>

        <H2>5. Responsabilité</H2>
        <P>Auto-Diag 44 n&apos;est pas responsable des dommages ou pertes résultant de l&apos;utilisation de nos services, sauf en cas de négligence grave ou de faute intentionnelle.</P>

        <H2>6. Confidentialité</H2>
        <P>
          Votre confidentialité est importante pour nous. Veuillez consulter notre{" "}
          <Link href="/legal/privacy-policy" className="hover:underline hover:underline-offset-4 text-brand-blue">
            Politique de confidentialité
          </Link>{" "}
          pour plus de détails sur la manière dont nous collectons, utilisons et protégeons vos informations personnelles.
        </P>

        <H2>7. Modifications des conditions</H2>
        <P>Auto-Diag 44 se réserve le droit de modifier ces conditions à tout moment. Les modifications seront publiées sur notre site web et l&apos;utilisation continue de nos services constitue une acceptation des nouvelles conditions.</P>

        <H2>8. Contactez-nous</H2>
        <P>
          Si vous avez des questions ou des préoccupations concernant ces Conditions d&apos;utilisation, veuillez nous contacter à{" "}
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
