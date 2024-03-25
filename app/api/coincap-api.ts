import { delayResponse } from "@/app/lib/mock"

export class CoincapApi {


    static async fetchBitcoin() : Promise<CoincapItem>{
        
        const coincapBitcoinResponse: CoincapResponse = await (
            await fetch(
                            `${process.env.NEXT_PUBLIC_API_COINCAP_IO_V2}/assets/bitcoin`
                        )
            ).json()
        
        return coincapBitcoinResponse.data
    }

/*
    static async fetchBitcoin() : Promise<CoincapItem>{
        
        const coincapBitcoinResponse: CoincapResponse = await (
            await fetch(
                            `${process.env.NEXT_PUBLIC_API_COINCAP_IO_V2}/assets/bitcoin`
                        )
            ).json()
        
        return delayResponse(coincapBitcoinResponse.data, 4000)
    }
*/
}