//Service for the authentication API
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Tokens } from "../models/token"
import { Location } from '@angular/common';
const BASE_URL = "http://localhost:3000/api/authentication/"
const BASE_USER_URL = "http://localhost:3000/api/user/"

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient, private location : Location) {
    console.log("Authentication Service Initialized")
  }

  //Returns clients jwt token
  getToken() {
    return sessionStorage.getItem("accessToken")
  }
  
  //Removes token from session storage
  clearTokens() {
    sessionStorage.clear()
  }

  setAccessToken(token) {
    this.clearTokens()
    sessionStorage.setItem("accessToken", token)
  }

  isAuthenticated() {
    const token = this.getToken()
    if (token) return true
    else return false
  }

  //Changes client url
  go(route: string) {
    this.location.replaceState(route);
    window.location.reload()
  }

  //Register a new user
  register(username: string, email: string, password: string) {
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    const body = {
      username: username,
      email: email,
      password: password
    }
    this.http.post(BASE_URL + "register/createUser", body, { headers: headers })
      .subscribe((res: Tokens) => {
        const accessToken = res.accessToken
        if (accessToken) {
          //User was created
          this.setAccessToken(accessToken)
          this.go("")
        }
      })
  }

  //Logs in a given user
  login(email: string, password: string) {
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    const body = {
      email: email,
      password: password
    }
    this.http.post(BASE_URL + "login/authenticate", body, { headers: headers })
      .subscribe((res: Tokens) => {
        const accessToken = res.accessToken
        if (accessToken) {
          //User was authenticated
          this.setAccessToken(accessToken)
          this.setUserStatusOnline()
            .then( () => this.go("") )
        }
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
