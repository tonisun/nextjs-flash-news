import { Navbar } from "@/app/components/Navbar/Navbar"

import dynamic from 'next/dynamic'
// NoSSR === No Server Side Rendering
const RandomNoSSR = dynamic(() => import('@/app/components/Random/Random'), { ssr: false })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex p-8">
      <RandomNoSSR />
      <Navbar/> 
      <div className="px-8 mt-16 w-full">
        {children}
      </div>   
    </div>
  )
}
