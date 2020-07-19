import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { UserSub } from "../models/user-sub"
import { Subject } from "rxjs"

const BASE_URL = "https://rumble-thread-based-messenger.herokuapp.com/api/user/"

@Injectable({
        providedIn: "root"
})
export class UsersService {
        users: UserSub[]
        usersUpdated = new Subject<UserSub[]>()

        constructor(private http: HttpClient) {}

        getUsersUpdated() {
                return this.usersUpdated.asObservable()
        }

        //Get user from list of users that have already been retreived from database
        getUserSub(userId: string) {
                if (this.users === undefined || this.users === null) return 
                for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i]._id === userId) {
                                return this.users[i]
                        }
                }
        }

        //Creates list of user subs from a list of userIds
        getUsers(userIds: string[]) {
                console.log("Getting users", userIds)
                this.users = []
                for (var i = 0; i < userIds.length; i++) {
                        const userId = userIds[i]
                        this.getUser(userId)
                                .then( (userSub: UserSub) => {
                                        this.users.push(userSub)
                                        this.updateUsers()
                                })
                }
        }

        //Promise that resolves a userSub
        getUser(userId: string) {
                return new Promise((resolve, reject) => {
                        if (userId === null || userId === undefined) {
                                reject("Bad data")
                                return
                        }
                        this.http.get(BASE_URL + "data/" + userId)
                                .subscribe( (userSub: UserSub) => {
                                        resolve(userSub)
                                })
                })   
        }

        //Updates the users subject
        updateUsers() {
                if (this.users) {
                        this.usersUpdated.next([...this.users])
                }
        }
}