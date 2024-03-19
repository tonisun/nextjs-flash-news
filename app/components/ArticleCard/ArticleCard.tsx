import { Article } from "@/app/types/article-type"
import Image from "next/image"
import Link from "next/link"
import defaultImageNews from '@/public/assets/images/default-news.png'
import { CATEGORIES } from "@/app/constants";

export function ArticleCard(p: {article: Article}) {
    return (
        <Link href={'#'} className="w-80 hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 pt-1 pb-4 px-6 rounded-xl">
            {/* Header */}
            <div>
                {/* Icon and category */}
                <div>
                    <div>
                        <Image src={CATEGORIES[p.article.category[0]].src} alt="Icon for category"/>
                    </div>
                    <div>
                        {p.article.category}
                    </div>
                </div>
                {/* Date */}
                <div>Published: {new Date( p.article.pubDate).toDateString()}</div>
            </div>

            {/* Body */}
            <div>
                {/* Title */}
                <div>{p.article.title}</div>
                {/* Article image */}
                <Image 
                    height={200} 
                    width={300} 
                    src={p.article.image_url || defaultImageNews } 
                    alt="Image for article" />
            </div>
        </Link>
    )
}