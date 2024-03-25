"use client"
import { useEffect, useState } from "react"

export default function DateString(p:{}) {

    const [value, setValue] = useState(new Date().toLocaleDateString())

    useEffect (() => {
        const intervalId = setInterval(() => {
            setValue(new Date().toLocaleDateString())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            {value}
        </>
    )
}