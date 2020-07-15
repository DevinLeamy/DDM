import { Message } from "./message"

export class Chat {
  _id: string
  title: string
  messages: Message[]
  category: string
  adminId: string
  subs: string[]
  global: boolean
  tags: string[]
  image: string
}
