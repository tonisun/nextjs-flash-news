import { ArticleAPI } from "@/app/api/article-api"
import { LatestNews } from "@/app/components/LatestNews/LatestNews"


export default function IndexPage() {

  return (
    <div>
      {/*<Spinner />*/}
      <LatestNews />
    </div>
  )
}
