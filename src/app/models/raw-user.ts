import { ChatSub } from "./chat-sub"
import { UserSub } from "./user-sub"

export class RawUser {
  _id: string
  username: string
  email: string
  chatSubs: ChatSub[]
  friendReqs: UserSub[]
  friends: UserSub[]
  salt: string
  password_hash: string
  image: string
}

