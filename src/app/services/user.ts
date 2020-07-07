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
  //Move this function into the server [I do not want to be sending the password hash out from the server]
  getUserFromRawUser(rawUser: RawUser): User {
    //Set image to default image if image has not been set
    return {
      _id: rawUser._id,
      username: rawUser.username,
      email: rawUser.email,
      chatSubs: rawUser.chatSubs,
      friendReqs: rawUser.friendReqs,
      friends: rawUser.friends,
      image: rawUser.image,
      online: rawUser.online
    }
  }

  sendFriendRequestToEmail(userEmail: String) {
    const body = {
      email: userEmail
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "friend-request", body, { headers: headers })
      .subscribe((res: {status: number}) => {
        if (res.status === 0) {
          //Unsuccessful
          return 0;
        } else {
          return 1;
        }
      })
  }

  acceptFriendRequest(requestId: string, requestUsername: string) {
    const body = {
      request: {
        _id: requestId,
        username: requestUsername
      }
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "accept-request", body, { headers: headers })
      .subscribe((res: {status: number}) => {
        if (res.status === 1) {
          // Success
          this.user.friendReqs = this.user.friendReqs
            .filter(request => (!(request._id === requestId && request.username === request.username)))
          this.user.friends.push({_id: requestId, username: requestUsername, image: "$$$Default$$$", online: false})
          this.updateUser()
        } 
      })
  }

  declineFriendRequest(requestId: string, requestUsername: string) {
    const body = {
      request: {
        _id: requestId,
        username: requestUsername
      }
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "decline-request", body, { headers: headers }) 
      .subscribe((res: {status: number}) => {
        if (res.status === 1) {
          //Success
          this.user.friendReqs = this.user.friendReqs
            .filter(request => (!(request._id === requestId && request.username === request.username)))
          this.updateUser()
        }
      })
  }

  //Sets profile image
  setProfileImage(image: File) {
    const formData = new FormData()
    formData.append("image", image, image.name)
    this.http.post(BASE_URL + "setProfileImage", formData) 
      .subscribe((res: {status: number, data: string}) => {
        if (res.status == 1) {
          this.user.image = res.data
          this.updateUser()
        }
      })
  }

  //Set user status as offline
  setUserStatusOffline() {
    return new Promise((resolve, reject) => {
      this.http.get(BASE_URL + "userOffline")
        .subscribe((res: {status: string, data: string} ) => {
          console.log(res)
          resolve(0)
        })
    })
  }

  updateUser() {
    this.userUpdated.next({...this.user})
  }
}
