import business from '@/public/assets/images/business.png'
import crime from '@/public/assets/images/crime.png'
import default_news from '@/public/assets/images/default-news.png'
import domestic from '@/public/assets/images/domestic.png'
import economy from '@/public/assets/images/economy.png'
import entertainment from '@/public/assets/images/entertainment.png'
import health from '@/public/assets/images/health.png'
import international from '@/public/assets/images/international.png'
import lifestyle from '@/public/assets/images/lifestyle.png'
import local from '@/public/assets/images/local.png'
import opinion from '@/public/assets/images/opinion.png'
import politics from '@/public/assets/images/politics.png'
import science from '@/public/assets/images/science.png'
import sports from '@/public/assets/images/sports.png'
import technology from '@/public/assets/images/technology.png'
import travel from '@/public/assets/images/travel.png'
import world from '@/public/assets/images/world.png'
import education from '@/public/assets/images/education.png'
import environment from '@/public/assets/images/environment.png'
import fashion from '@/public/assets/images/fashion.png'
import food from '@/public/assets/images/food.png'
import history from '@/public/assets/images/history.png'
import media from '@/public/assets/images/media.png'
import military from '@/public/assets/images/military.png'
import nature from '@/public/assets/images/nature.png'
import other from '@/public/assets/images/other.png'
import religion from '@/public/assets/images/religion.png'
import social from '@/public/assets/images/social.png'
import space from '@/public/assets/images/space.png'
import weather from '@/public/assets/images/weather.png'
import wildlife from '@/public/assets/images/wildlife.png'
import art from '@/public/assets/images/art.png'
import beauty from '@/public/assets/images/beauty.png'
import books from '@/public/assets/images/books.png'
import culture from '@/public/assets/images/culture.png'
import family from '@/public/assets/images/family.png'
import gardening from '@/public/assets/images/gardening.png'
import hobbies from '@/public/assets/images/hobbies.png'
import home from '@/public/assets/images/home.png'
import pets from '@/public/assets/images/pets.png'
import photography from '@/public/assets/images/photography.png'
import relationships from '@/public/assets/images/relationships.png'
import spirituality from '@/public/assets/images/spirituality.png'
import television from '@/public/assets/images/television.png'
import transportation from '@/public/assets/images/transportation.png'
import top from '@/public/assets/images/top.png'
import tourism from '@/public/assets/images/tourism.png'
import weddings from '@/public/assets/images/weddings.png'
import work from '@/public/assets/images/work.png'
import writing from '@/public/assets/images/writing.png'
import charity from '@/public/assets/images/charity.png'
import fundraising from '@/public/assets/images/fundraising.png'
import non_profit from '@/public/assets/images/non-profit.png'
import volunteering from '@/public/assets/images/volunteering.png'
import activism from '@/public/assets/images/activism.png'
import advocacy from '@/public/assets/images/advocacy.png'
import human_rights from '@/public/assets/images/human-rights.png'
import law from '@/public/assets/images/law.png'
import politics_2 from '@/public/assets/images/politics-2.png'
import public_policy from '@/public/assets/images/public-policy.png'
import social_justice from '@/public/assets/images/social-justice.png'
import government from '@/public/assets/images/government.png'
import international_relations from '@/public/assets/images/international-relations.png'
import public_relations from '@/public/assets/images/public-relations.png'
import personal from '@/public/assets/images/personal.png'
import corporate from '@/public/assets/images/corporate.png'

export type ArticleCategory = "business" | "environment" | "technology" | "world"  // Füge alle möglichen Kategorien hinzu

export const CATEGORIES = {
    business: { src: business, alt: "Business logo", category: "business" as ArticleCategory },
    crime: { src: crime, alt: "Crime logo", category: "crime" },
    domestic: { src: domestic, alt: "Domestic logo", category: "domestic" },
    education: { src: education, alt: "Education logo", category: "education" },
    entertainment: { src: entertainment, alt: "Entertainment logo", category: "entertainment" },
    environment: { src: environment, alt: "Environment logo", category: "environment" as ArticleCategory },
    food: { src: food, alt: "Food logo", category: "food" },
    health: { src: health, alt: "Health logo", category: "health" },
    other: { src: other, alt: "Other logo", category: "other" },
    science: { src: science, alt: "Science logo", category: "science" },
    sports: { src: sports, alt: "Sport logo", category: "sports" },
    politics: { src: politics, alt: "Politics logo", category: "politics" },
    technology: { src: technology, alt: "Technology logo", category: "technology" as ArticleCategory },
    top: { src: top, alt: "Top logo", category: "top" },
    tourism: { src: tourism, alt: "Tourism logo", category: "tourism" },
    world: { src: world, alt: "World logo", category: "world" as ArticleCategory }
}

export const NAV_ITEMS = [
    CATEGORIES.business,
    CATEGORIES.environment,
    CATEGORIES.technology,
    CATEGORIES.world
]