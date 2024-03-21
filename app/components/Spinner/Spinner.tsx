import Image from "next/image";
import lightning from '@/public/assets/images/lightning.png'

export function Spinner () {

    return <div>
        <Image src={lightning} alt="Spinner Image" className="mb-4 w-10 animate-spin"/>
        <div>Loading ...</div>
    
    </div>
}