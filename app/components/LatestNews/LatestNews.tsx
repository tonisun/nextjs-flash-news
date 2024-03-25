import { ArticleAPI } from "@/app/api/article-api"
import { ArticleList } from "@/app/components/ArticleList/ArticleList"
import Image from "next/image"
import top from '@/public/assets/images/top.png'
import Skeleton from "react-loading-skeleton"

export async function LatestNews(p: {}) {

    const articles = await ArticleAPI.fetchToday()

  return (
    <div className="">
      <div className="flex items-center space-x-4 mb-16">
        <Image src={top} className="h-10 w-10" alt="Latest news icon"/>
        <h1 className="text-4xl font-bold capitalize">Latest News</h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const LatestNewsSkeleton = () => {
  return <div>
            <Skeleton height={40} width={218} count={1} className="mb-16 rounded-xl shadow-lg" />
            
            <div className="grid grid-cols-3 gap-x-8 gap-y-20" >
              { Array.from({length: 15}).map((i) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="">
                    <Skeleton height={344} width={320} className="rounded-xl shadow-lg"  />
                  </div>
                )) 
              }
            </div>     
          </div>
}
