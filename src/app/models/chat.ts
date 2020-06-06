import { Message } from "./message"
import { UserSub } from "./user-sub"
import { Category } from './category'

export class Chat {
  _id: string
  title: string
  messages: Message[]
  category: Category
  admin: UserSub
  subs: UserSub[]
  //If global than the given chat is a global chat
  //Otherwise, the given chat is a private chat
  global: boolean
}
