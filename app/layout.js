import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/_components/Header"
import Footer from "./_components/Footer"
import { Toaster } from "react-hot-toast"
import { Suspense } from "react"
import Spinner from "./_components/Spinner"
// import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    template: "%s | Auto-Diag 44",
    default: "Bienvenue | Auto-Diag 44"
  },
  metadataBase: new URL(process.env.VERCEL_URL),
  alternates: {
    canonical: "/"
  },
  description: "Bienvenue chez Auto-Diag 44, votre expert en diagnostics automobiles, réparation et programmation de clés à Nantes et en Loire-Atlantique. Services rapides, fiables et pratiques pour plus de 140 marques de véhicules. Interventions sur site disponibles.",
  keywords: ["Diagnostics", "Programmation cles", "Nantes", "Loire-Atlantique", "Reparation"],
  authors: [
    { name: "Ayoub Aloui", url: "https://alouiayoub.com" },
    { name: "Web & IT Genius", url: "https://webitgenius.com" }
  ],
  creator: "Web & IT Genius",
  publisher: "Web & IT Genius",
  locale: "fr_FR",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto-Diag 44",
    description: "Bienvenue chez Auto-Diag 44, votre expert en diagnostics automobiles, réparation et programmation de clés sur Nantes et toute la région Loire-Atlantique. Services rapides, fiables et pratiques pour plus de 140 marques de véhicules. Interventions sur site disponibles.",
    images: {
      url: "2.png",
      alt: "Auto-Diag 44 Logo"
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`bg-primary-950 text-primary-900 min-h-screen ${inter.className} flex flex-col`}>
        <Header />
        <div className="flex-1">
          <main className="mx-auto w-full">
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000
                },
                error: {
                  duration: 5000
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "text-gray-50",
                  color: "text-gray-700"
                }
              }}
            />
            {/* <SpeedInsights /> */}
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
