"use client"

import { CoincapApi } from "@/app/api/coincap-api"
import { useEffect, useState } from "react"


export function CryptoNews (p: {initialData: CoincapItem}) {

    const [cryptoNews, setCryptoNews] = useState<CoincapItem>(p.initialData)

    const fetchCryptoData = async () => {
        const cryptoResponse = await CoincapApi.fetchBitcoin()

        setCryptoNews(cryptoResponse)
    }

    useEffect(() => {
        fetchCryptoData()
        const intevalId = setInterval(fetchCryptoData, 20000)
        
        return () => {
            clearInterval(intevalId)
        }
    }, [])

    function roundPrice(priceUsd: string): string {
        const numericPrice = parseFloat(priceUsd)
        if (!isNaN(numericPrice)) {
            return numericPrice.toFixed(2)
        } else {
            console.error("Preis ist keine gültige Zahl:", priceUsd)
            return "0.00"
        }
    }

    const getEvolutionEmoji = (value: string) => {
        const v = Number(value)
        return v > 0 ? (
            <span className="text-3xl font-extrabold text-green-500">△</span>
          ) : (
            <span className="text-3xl font-extrabold text-red-500">▽</span>
          )
    }

    return cryptoNews &&
      <div className="">

        <div className="flex-col space-x-4 space-y-4 mb-8">
            <h2 className="text-xl font-bold">
                <span className="animate-pulse">🔴</span> Crypto News
            </h2>
        </div>
        
        <div className="w-80 border-2 p-4 rounded-lg shadow-lg">
            <div>
                <div className="text-lg font-semibold mb-4">
                    {cryptoNews.name + " market"}
                </div>
                <div className="text-slate-500">
                    Real time {cryptoNews.name}
                </div>
            </div>
            
            <div className="space-y-2 text-sm">
                <div className="">{roundPrice(cryptoNews.priceUsd)} $ &nbsp;&nbsp;({roundPrice(cryptoNews.changePercent24Hr)}%) {getEvolutionEmoji(cryptoNews.changePercent24Hr)}</div>
            </div>
        </div>

      </div>
    
}

