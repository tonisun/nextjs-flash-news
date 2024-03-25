
import { LatestNews, LatestNewsSkeleton } from "@/app/components/LatestNews/LatestNews"
import { CryptoNews, CryptoNewsSkeleton } from "../components/CryptoNews/CryptoNews.server"
import { Suspense } from "react"


export default function IndexPage() {

  return (
    <div className="flex justify-between">
      <Suspense fallback={
          <LatestNewsSkeleton />
        }
      >
        <LatestNews />
      </Suspense>
      <Suspense fallback={
        <CryptoNewsSkeleton/>
      }>
        <CryptoNews />
      </Suspense>
    </div>
  )
}
