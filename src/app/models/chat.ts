import { Message } from "./message"
import { UserSub } from "./user-sub"
import { Category } from './category'
import { UserId } from './user-Id'

export class Chat {
  _id: string
  title: string
  messages: Message[]
  category: Category
  admin: UserSub
  subs: UserId[]
  global: boolean
  tags: string[]
  image: string
}
