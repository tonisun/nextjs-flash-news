export class CoincapApi {


    static async fetchBitcoin() : Promise<CoincapItem>{
        
        const coincapBitcoinResponse: CoincapResponse = await (
            await fetch(
                            `${process.env.NEXT_PUBLIC_API_COINCAP_IO_V2}/assets/bitcoin`
                        )
            ).json()
        
        return coincapBitcoinResponse.data
    }
}