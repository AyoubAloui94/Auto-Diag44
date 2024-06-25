import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/_components/Header"
import Footer from "./_components/Footer"
import { Toaster } from "react-hot-toast"
import { Suspense } from "react"
import Spinner from "./_components/Spinner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    template: "%s | Auto-Diag 44",
    default: "Bienvenue | Auto-Diag 44"
  },
  description: "car diagnostics"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary-950 text-primary-100 min-h-screen ${inter.className} flex flex-col`}>
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
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
