import { ChatSub } from "./chat-sub"
import { UserSub } from "./user-sub"

export class User {
  _id: string
  username: string
  email: string
  chatSubs: ChatSub[]
  friendReqs: UserSub[]
  friends: UserSub[]
  image: string
}
