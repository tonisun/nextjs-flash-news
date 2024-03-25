
import { LatestNews, LatestNewsSkeleton } from "@/app/components/LatestNews/LatestNews"
import { CryptoNews, CryptoNewsSkeleton } from "@/app/components/CryptoNews/CryptoNews.server"
import { Suspense } from "react"


export default function IndexPage() {

  return (
    <div className="flex justify-between">

      {/* Latest News Component */}
      <Suspense fallback={<LatestNewsSkeleton />}>
        <LatestNews />
      </Suspense>

      {/* Crypto News Component */}
      <Suspense fallback={<CryptoNewsSkeleton/>}>
        <CryptoNews />
      </Suspense>
    </div>
  )
}
