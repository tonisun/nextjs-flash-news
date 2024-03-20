"use client"
import  Image, { ImageProps, StaticImageData } from "next/image"
import { useState } from "react"

export function ImageWithFallback({fallback, src, alt, ...p}: ImageProps & {fallback: StaticImageData}) {

    const [imgSrc, setImgSrc] = useState(src)

    return <Image {...p} src={imgSrc} alt={alt} onError={(event) => {
        setImgSrc(fallback.src)
    }} />
        
} 
