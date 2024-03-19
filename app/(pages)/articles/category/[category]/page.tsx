import { CATEGORIES } from "@/app/constants"
import Image from "next/image"
import { ArticleCategory } from "@/app/types/article-type"

export default function CategoryDetailPage (p: { params:{ category: ArticleCategory; date: string}}){

    const image = CATEGORIES[p.params.category]

    return (
        <div className="flex items-center space-x-4">
            <Image {...image} className="w-8 h-8"/>
            <h1 className="capitalize font-bold text-3xl">
                {p.params.category} News
            </h1>
        
        </div>
    )
}