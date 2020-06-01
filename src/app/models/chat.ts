import { Message } from "./message"

export class Chat {
  _id: string
  title: string
  messages: Message[]
  categoryId: string
  adminId: string
  subIds: string[]
  //If global than the given chat is a global chat
  //Otherwise, the given chat is a private chat
  global: boolean
}
