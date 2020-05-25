//Service for the authentication API
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Tokens } from "../models/token"
import { Location } from '@angular/common';
const BASE_URL = "http://localhost:3000/api/authentication/"

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

  // getRefreshToken() {
  //   return sessionStorage.getItem("refreshToken")
  // }

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

  go(route: string) {
    this.location.replaceState(route);
    window.location.reload()
  }

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
          this.go("")
        }
      })
  }
}
