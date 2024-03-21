import { ArticleAPI } from "@/app/api/article-api"
import { ArticleList } from "@/app/components/ArticleList/ArticleList"
import { ArticleCategory } from "@/app/types/article-type"
import { CATEGORIES, NAV_ITEMS } from "@/app/constants"
import Image from "next/image"

export const dynamic = "force-dynamic"

/*
export const revalidate = 1000

export function generateStaticParams() {

    return NAV_ITEMS.map(navItem => {
        return {
            params: {
                category: navItem.category,
            }
        }
    })
}
*/

export default async function ArticlesByCategory (p: {
    params: {
        category: ArticleCategory
    }
}) {

    const articles = await ArticleAPI.fetchByCategory(p.params.category)
    //const articles = undefined
    return ( 
        <div>
            <div className="flex items-center space-x-4 mb-16">
                
                    <Image
                    src={CATEGORIES[p.params.category].src}
                    className="h-10 w-10 cursor-pointer"
                    alt="Latest news icon"
                    />
                <h1 className="text-4xl font-bold capitalize">
                {p.params.category} news
                </h1>
            </div>
            <ArticleList articles={articles} /> 
        </div>
    )
}