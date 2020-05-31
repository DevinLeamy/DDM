import { Message } from "./message"
import { Sub } from "./sub"

export class Chat {
  _id: string
  title: string
  messages: Message[]
  categoryId: string
  adminId: string
  subIds: Sub[]
  //If global than the given chat is a global chat
  //Otherwise, the given chat is a private chat
  global: boolean
}
