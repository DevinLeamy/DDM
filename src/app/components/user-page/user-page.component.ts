import { Component, OnInit, OnDestroy } from "@angular/core"
import { UserService } from "../../services/user"
import { Subscription } from "rxjs"
import { User } from 'src/app/models/user'
import { AuthenticationService } from 'src/app/services/authentication'
import { ChatsService } from 'src/app/services/chats'
import { UsersService } from 'src/app/services/users'

@Component({
        selector: "app-user-page",
        templateUrl: "user-page.component.html",
        styleUrls: ["user-page.component.css"],
        providers: [ChatsService, UsersService]
})
export class UserPageComponent {
        user: User
        userSub: Subscription
        constructor(
                private userService: UserService, 
                private authService: AuthenticationService, 
                private chatsService: ChatsService,
                private usersService: UsersService
        ) {}

        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                                //Collects needed chat subs from database if they have not already been collected
                                if (this.chatsService.chats === undefined || this.chatsService.chats === null) {
                                        var chatIds = []
                                        for (var i = 0; i < this.user.chatIds.length; i++) {
                                                const chatId = this.user.chatIds[i]
                                                if (chatIds.indexOf(chatId) === -1) {
                                                        chatIds.push(chatId)
                                                }
                                        }
                                        this.chatsService.getChats(chatIds)
                                }
                                //Collect needed user subs from database if they have not already been collected
                                if (this.usersService.users === undefined || this.usersService.users === null) {
                                        var userIds = []
                                        for (var i = 0; i < this.user.friendIds.length; i++) {
                                                const userId = this.user.friendIds[i]
                                                if (userIds.indexOf(userId) === -1) {
                                                        userIds.push(userId)
                                                }
                                        }
                                        for (var i = 0; i < this.user.friendReqIds.length; i++) {
                                                const userId = this.user.friendReqIds[i]
                                                if (userIds.indexOf(userId) === -1) {
                                                        userIds.push(userId)
                                                }
                                        }
                                        this.usersService.getUsers(userIds)
                                }
                        })
                this.userService.getUser()
        }

        isAuthenticated() {
                return this.authService.isAuthenticated()
        }

        //Avoid memoroy leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
} 