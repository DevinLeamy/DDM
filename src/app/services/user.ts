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
      _id: rawUser._id,
      username: rawUser.username,
      email: rawUser.email,
      chatSubs: rawUser.chatSubs,
      friendReqs: rawUser.friendReqs,
      friends: rawUser.friends
    }
  }

  sendFriendRequestToEmail(userEmail) {
    const body = {
      email: userEmail
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "send-friend-request", body, { headers: headers })
      .subscribe((res: {status: number}) => {
        if (res.status === 0) {
          //Unsuccessful
          return 0;
        } else {
          return 1;
        }
      })
  }

  updateUser() {
    this.userUpdated.next({...this.user})
  }
}
