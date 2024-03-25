import { Navbar } from "@/app/components/Navbar/Navbar"

import dynamic from 'next/dynamic'
// NoSSR === No Server Side Rendering
const ClockNoSSR = dynamic(() => import('@/app/components/Clock/Clock'), { ssr: false })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="p-8">
      <div className="h-12"><ClockNoSSR/></div>
      <div className="flex">
        
        <Navbar/> 
        <div className="px-8 mt-16 w-full">
          {children}
        </div>   
      </div>
    </div>
  
  )
}
