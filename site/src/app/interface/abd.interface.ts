import { SafeHtml, SafeUrl } from "@angular/platform-browser"

export type ArticleId = string
export type ArticleIds = Array<ArticleId>
export type AbdDifficulty = 0 | 1 | 2 | 3 | 4 | 5
export type AbdDanger = {
  level: 0 | 1 | 2 | 3 | 4 | 5
  advise: string
}

export interface IAbd {
  articleIds: ArticleIds
}

export interface IAbdArticle {
  id: string
  title: string
  description: string
  pubdate: EpochTimeStamp
  document: SafeHtml
  cover: SafeUrl
  location: IAbdLocation
  detail: IAbdDetail
  tags: string[]
}

export interface IAbdArticleUI extends IAbdArticle {}

export interface IAbdLocation {
  id: string
  country: string
  state: string
  fullLocation: string
}

export interface IAbdDetail {
  id: string
  what?: string
  when?: {
    build: EpochTimeStamp
    fall: EpochTimeStamp
    restore: EpochTimeStamp
  }
  why?: string
  access?: IAbdAccess
}

export interface IAbdAccess {
  id: string
  location?: IAbdLocation
  entry?: string
  difficulty?: AbdDifficulty
  bring?: {
    friends: number
    items: string[]
  }
  danger?: AbdDanger
}

export interface IAbdUser {
  id: string
  articleIds: ArticleIds
  name: string
  username: string
  password: string
  headPic: SafeUrl
}
