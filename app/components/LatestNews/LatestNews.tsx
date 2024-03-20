import { ArticleAPI } from "@/app/api/article-api"
import { ArticleList } from "@/app/components/ArticleList/ArticleList"
import Image from "next/image"
import top from '@/public/assets/images/top.png'

export async function LatestNews(p: {}) {

    const articles = await ArticleAPI.fetchToday()

  return (
    <>
      <div className="flex items-center space-x-4 mb-16">
        <Image src={top} className="h-10 w-10" alt="Latest news icon"/>
        <h1 className="text-4xl font-bold capitalize">Latest News</h1>
      </div>
      <ArticleList articles={articles} />
    </>
  )
}
