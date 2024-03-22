import { ArticleAPI } from "@/app/api/article-api"
import { ImageWithFallback } from "@/app/components/ImageWithFallback/ImageWithFallback"
import { CATEGORIES } from "@/app/constants"
import defaultNews from "@/public/assets/images/default-news.png"
import Image from "next/image"
import Link from "next/link"

export default async function ArticleDetailPage(p: {params: { title: string}}) {

    const article = await ArticleAPI.fetchByTitle(p.params.title)
    const category = article.category[0]

    const header = <div className="space-y-2">
        <div className="text-md capitalize flex items-center gap-2">
            <div className="flex justify-center items-center border border-slate-300 rounded-full w-10 h-10">
                <Image src={CATEGORIES[category].src} alt={"Icon for "+ category} className="w-9 h-9" />
            </div>
            <div className="capitalize font-semibold">{category}</div>
        </div>
        <div className="text-xs text-slate-500">Published { new Date(article.pubDate).toDateString() }</div>
    </div>

    const body = 
    <div className="space-y-4">
        <h1>{article.title}</h1>
        <h2>{article.description}</h2>
        <div className="flex justify-center">
            <ImageWithFallback 
                alt="Image for article" 
                className="rounded-lg" 
                height={400} 
                width={600} 
                src={article.image_url || defaultNews} 
                fallback={defaultNews} 
            />
        </div>
        <p className="text-justify">{article.content}</p>
    </div>

    const footer = <div className="">
        <div className="l">
            Written by <span className="font-semibold">{article.creator}</span>
        </div>
        <Link href={article.link} className="text-blue-500 underline">Source</Link>
    </div>

    return (
        <div className="flex flex-col items-center">
            <div className="space-y-6 max-w-6xl prose">
                {/*{JSON.stringify(article)}*/}

                {/* Header */}
                {header}

                {/* Body */}
                {body}

                {/* Footer */}
                {footer}
            </div>
            
        </div>
    )
}