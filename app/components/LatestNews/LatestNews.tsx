import { ArticleAPI } from "@/app/api/article-api"
import { ArticleCard } from "@/app/components/ArticleCard/ArticleCard"

export async function LatestNews(p: {}) {

    const articles = await ArticleAPI.fetchToday()

  return (
    <div className="bg-gray-200">
      {/*JSON.stringify(articles)*/}
      <ArticleCard article={articles[0]} />
    </div>
  )
}
