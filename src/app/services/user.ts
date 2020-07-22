//Service for User API
const BASE_URL = "https://rumble-thread-based-messenger.herokuapp.com/api/user/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { User } from '../models/user'
import { Subject } from 'rxjs'
import { Location } from '@angular/common'

@Injectable({ providedIn: "root"} )
export class UserService {
  user : User
  userUpdated = new Subject<User>()
  constructor(private http: HttpClient, private location: Location) {
    console.log("User Service Initialized")
  }

  getUserUpdated() {
    return this.userUpdated.asObservable()
  }

  getUser(query=false) {
    if (query || this.user == undefined || this.user == null) {
      //Query for user
      this.http.get(BASE_URL + "data")
      .subscribe((res : {status: string, data: any}) => {
        if (res.status === '0') {
          this.user = res.data
          this.updateUser()
        }
      })
    } else {
      //Update subscription with existing user
      this.updateUser()
    }
  }

  //Send friend request
  sendFriendRequestToEmail(userEmail: String) {
    const body = {
      email: userEmail
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "friend-request", body, { headers: headers })
      .subscribe((res: {status: string, data: any}) => {
        console.log(res)
      })
  }

  //Logs out the user
  logOut() {
    //Sets user status as offline
    this.http.get(BASE_URL + "userOffline")
      .subscribe((res: {status: string, data: string}) => {
        console.log(res)
        //Deletes authentication token
        sessionStorage.clear()
        //Deletes user data
        this.user = undefined
        //Routes to the home page and reloads
        this.go("")
      })
  }

  //Changes client url
  go(route: string) {
    this.location.replaceState(route);
    window.location.reload()
  }

  acceptFriendRequest(requestId: string) {
    const body = {
        requestId: requestId,
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "accept-request", body, { headers: headers })
      .subscribe((res: {status: string, data: any}) => {
        if (res.status === '0') {
          const index = this.user.friendReqIds.indexOf(requestId)
          if (index !== -1) {
            this.user.friendReqIds.splice(index, 1)
            this.updateUser()
          }
          this.user.friendIds.push(requestId)
          this.updateUser()
        }
      })
  }

  declineFriendRequest(requestId: string) {
    const body = {
      requestId: requestId
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "decline-request", body, { headers: headers }) 
      .subscribe((res: {status: string, data: any}) => {
        if (res.status === "0") {
          const index = this.user.friendReqIds.indexOf(requestId)
          if (index !== -1) {
            this.user.friendReqIds.splice(index, 1)
            this.updateUser()
          }
        }
      })
  }

  //Sets profile image
  setProfileImage(dataUrl) {
    const body = {
      imageUrl: dataUrl
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "setProfileImage", body, { headers: headers }) 
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