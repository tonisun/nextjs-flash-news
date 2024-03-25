import { Article } from "@/app/types/article-type"

export function delayResponse<T> (response: T, duration = 1000): Promise<T> {
    return new Promise<T>((resolve) => {
        setTimeout(() => {
            resolve(response)
        }, duration)
    })
}

export const FAKE_LATEST_ARTICLES: Article[] = [
    {
        article_id: "1",
        title: "Artickle1",
        link: "https://app1.bitwd.com/",
        keywords: null,
        creator: null,
        video_url: null,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem eos, earum laudantium iste quo temporibus ratione nobis cumque, dolorum minima magni ut ipsam, aperiam dolores perferendis. Ratione, minus iure!", 
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem eos, earum laudantium iste quo temporibus ratione nobis cumque, dolorum minima magni ut ipsam, aperiam dolores perferendis. Ratione, minus iure!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem eos, earum laudantium iste quo temporibus ratione nobis cumque, dolorum minima magni ut ipsam, aperiam dolores perferendis. Ratione, minus iure!",
        pubDate: "2021-01-01",
        image_url: "https://picsum.photos/200/300",
        source_id: "1",
        source_priority: 1,
        country: ["US"],
        category: ["business"],
        language: "en",
    },
    {
        article_id: "2",
        title: "Artickle2",
        link: "https://app1.bitwd.com/",
        keywords: null,
        creator: null,
        video_url: null,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem eos, earum laudantium iste quo temporibus ratione nobis cumque, dolorum minima magni ut ipsam, aperiam dolores perferendis. Ratione, minus iure!", 
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem eos, earum laudantium iste quo temporibus ratione nobis cumque, dolorum minima magni ut ipsam, aperiam dolores perferendis. Ratione, minus iure!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quidem eos, earum laudantium iste quo temporibus ratione nobis cumque, dolorum minima magni ut ipsam, aperiam dolores perferendis. Ratione, minus iure!",
        pubDate: "2021-01-01",
        image_url: "https://picsum.photos/200/300",
        source_id: "1",
        source_priority: 1,
        country: ["US"],
        category: ["business"],
        language: "en",
    },
]