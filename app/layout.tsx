import "./globals.css"
import 'react-loading-skeleton/dist/skeleton.css'
import {Poppins, Roboto_Mono, Inter} from "next/font/google"
import { Metadata } from "next"

const poppins = Poppins({subsets: ["latin"], weight: "400"})
const roboto = Roboto_Mono({subsets: ["latin"]})
const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Nextjs flash news",
  description: "Get the latest flash news",
  icons: {
    icon: [
        '@/public/assets/icons/favicon.ico?v=4',
    ],
    apple: [
      '@/public/assets/icons/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '@/public/assets/icons/apple-touch-icon.png'
    ],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${poppins.className}`}>
      {children}
      </body>
    </html>
  )
}
