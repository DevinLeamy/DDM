//Service for the authentication API
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http'
import { Tokens } from "../models/token"
import * as io from 'socket.io-client'
import { Router } from "@angular/router"
import { Location } from '@angular/common'
const BASE_URL = "http://localhost:3000/api/authentication/"
const BASE_USER_URL = "http://localhost:3000/api/user/"

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient, private location : Location, private router: Router) {
    console.log("Authentication Service Initialized")
    // router.events.subscribe((val) => {
    //     console.log("here", val)
    // });
  }

  //Returns clients jwt token
  getToken() {
    return sessionStorage.getItem("accessToken")
  }

  //Removes token from session storage
  clearTokens() {
    sessionStorage.clear()
  }

  setAccessToken(token: string) {
    this.clearTokens()
    sessionStorage.setItem("accessToken", token)
  }

  isAuthenticated() {
    if (this.getToken()) return true
    return false
  }

  //Changes client url
  go(route: string) {
    this.location.replaceState(route);
    window.location.reload()
  }

  //Register a new user
  register(username: string, email: string, password: string) {
    return new Promise(resolve => {
      var headers = new HttpHeaders()
      headers = headers.append('Content-type', 'application/json')
      const body = {
        username: username,
        email: email,
        password: password
      }
      this.http.post(BASE_URL + "register/createUser", body, { headers: headers })
        .subscribe((res: {status: string, data: any}) => {
          if (res.status === '0') {
            const accessToken = res.data
            if (accessToken) {
              //User was created
              this.setAccessToken(accessToken)
              this.go("")
            }
          } else {
            resolve(res.data)
          }
        })
    })
  }


//Logs in a given user
login() {
    return new Promise(resolve => {
        this.http.get(BASE_URL + "login")
            .subscribe((res: {status: string, data: any}) => {
                if (res.status === '0') {
                    const accessToken = res.data
                    if (accessToken) {
                        //User was authenticated
                        this.setAccessToken(accessToken)
                        this.setUserStatusOnline()
                        .then( () => this.go("") )
                    }
                } else {
                    resolve(res.data)
                }
            })
    })
}

  //Set user status as online
  setUserStatusOnline() {
    return new Promise((resolve, reject) => {
      this.http.get(BASE_USER_URL + "userOnline")
       .subscribe((res: {status: string, data: string} ) => {
        console.log(res)
        resolve("User status was set")
       })
    })
  }
}
