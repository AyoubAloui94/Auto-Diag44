import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/_components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    template: "%s | Auto-Diag 44",
    default: "Acceuil | Auto-Diag 44"
  },
  description: "car diagnostics"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary-950 text-primary-100 min-h-screen ${inter.className} flex flex-col`}>
        <Header />
        <div className="flex-1">
          <main className="mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}
