//Service for User API
const BASE_URL = "http://localhost:3000/api/user/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { User } from '../models/user'
import { RawUser } from '../models/raw-user'
import { Subject } from 'rxjs'

@Injectable({ providedIn: "root"} )
export class UserService {
  user : User;
  userUpdated = new Subject<User>()
  constructor(private http: HttpClient) {
    console.log("User Service Initialized")
  }

  getUserUpdated() {
    return this.userUpdated.asObservable()
  }

  getUser(query=false) {
    if (query || this.user == undefined || this.user == null) {
      //Query for user
      this.http.get(BASE_URL + "data")
      .subscribe((res : RawUser) => {
        this.user = this.getUserFromRawUser(res)
        this.updateUser()
      })
    } else {
      //Update subscription with existing user
      this.updateUser();
    }
  }

  //Creates user object from database raw user data
  getUserFromRawUser(rawUser: RawUser): User {
    return {
      username: rawUser.username,
      email: rawUser.email,
      subIds: rawUser.subscription_ids,
      chatIds: rawUser.chat_ids,
      friendReqIds: rawUser.friend_request_ids,
      friendIds: rawUser.friend_ids,
      _id: rawUser._id
    }
  }

  updateUser() {
    this.userUpdated.next({...this.user})
  }
}
