import Link from "next/link"
import E404 from '@/public/assets/images/404.png'
import Image from "next/image"

export default function NotFound(){
    
    return (
        <div className="flex h-screen w-screen justify-center items-center ">
            <div className="space-y-4 text-center">
                <h2 className="text-2xl">404 | Page Not Found</h2>
                <p className="text-xs">Could not find requested resource.</p>
                <Link href="/" className="text-blue-500 hover:underline">Go back to home</Link>
                <Image src={E404} alt="Error 404 Image" className="w-96" />
            </div>
        </div>
    )
}