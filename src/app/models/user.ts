import { UserSub } from "./user-sub"

export class User {
  _id: string
  username: string
  email: string
  chatIds: string[]
  friendReqs: UserSub[]
  friends: UserSub[]
  image: string
  online: boolean
}
