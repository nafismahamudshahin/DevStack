export interface ITechnology {
    "id": string,
    "name": string,
    "category": string,
    "description": string,
    "icon": string,
    "rating": number,
    "difficulty": string,
    "badge": string
}

export interface IBadgeColorType {
    Fast: string,
    Popular: string,
    Modern: string,
    Enterprise: string,
    Trending: string,
    Essential: string,
    Lightweight: string,
    NoSQL: string,
    "Top SQL": string,
    Classic: string,
}