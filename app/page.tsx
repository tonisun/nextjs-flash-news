import { ArticleAPI } from "@/app/api/article-api"
import { LatestNews } from "@/app/components/LatestNews/LatestNews"


export default function IndexPage() {

  return (
    <div className="bg-gray-200">
      <LatestNews />
    </div>
  )
}
