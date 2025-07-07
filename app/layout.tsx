import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MP Riquelme",
  description:
    "Crea tu tienda online y comenzar a vender en minutos. Herramientas profesionales, diseños responsivo y soporte.",
  keywords: "tienda online, e-commerce, vender online, crear tienda, comercio electrónico, Chile",
  authors: [{ name: "MP Riquelme" }],
  openGraph: {
    title: "MP Riquelme - Desarrollo Web",
    description: "Crea tu tienda online y comenzar a vender en minutos.",
    type: "website",
    locale: "es_CL",
  },
    generator: 'mpriquelme.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
