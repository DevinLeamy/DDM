import { Message } from "./message"
import { UserSub } from "./user-sub"
import { Category } from './category'

export class Chat {
  _id: string
  title: string
  messages: Message[]
  category: Category
  admin: UserSub
  subs: string[]
  global: boolean
  tags: string[]
  image: string
}
