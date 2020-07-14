import { UserSub } from "./user-sub"

export class User {
  _id: string
  username: string
  email: string
  chatIds: string[]
  friendReqIds: string[]
  friendIds: string[]
  image: string
  online: boolean
}
