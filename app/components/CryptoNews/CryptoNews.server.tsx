import { CoincapApi } from "@/app/api/coincap-api"
import { CryptoNews as CryptoNewsClient } from "./CryptoNews.client"

export async function CryptoNews(p: {}) {

    const crypto = await CoincapApi.fetchBitcoin()

    return (
        <>
        <CryptoNewsClient initialData={crypto} />
        </>
    )
    
}