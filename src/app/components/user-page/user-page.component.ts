import { Component, OnInit, OnDestroy } from "@angular/core"
import { UserService } from "../../services/user"
import { Subscription } from "rxjs"
import { User } from 'src/app/models/user'
import { AuthenticationService } from 'src/app/services/authentication'
import { ChatsService } from 'src/app/services/chats'
import { UsersService } from 'src/app/services/users'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
        selector: "app-user-page",
        templateUrl: "user-page.component.html",
        styleUrls: ["user-page.component.css"],
        animations: [
                trigger("expansionPanel", [
                        state("open", style({
                                visibility: "visible",
                                width: "calc(100% - 64px)"
                        })),
                        state("closed", style({
                                width: "0%",
                                visibility: "hidden"
                        })),
                        transition("open => closed", [
                                animate("0.2s")
                        ]),
                        transition("closed => open", [
                                animate("0.2s")
                        ])
                ]),
                trigger("expansionTitle", [
                        state("visible", style({
                                width: "30px",
                                lineHeight: "30px",
                                marginRight: "1px",
                                marginLeft: "1px",
                                visibility: "visible"
                        })),
                        state("invisible", style({
                                width: "0px",
                                visibility: "hidden"
                        }))
                  ])
        ],
        providers: [ChatsService, UsersService]
})
export class UserPageComponent implements OnInit, OnDestroy {
        user: User
        userSub: Subscription
        leftExpanded: boolean = false
        rightExpanded: boolean = true
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

        //Toggles the left expansion panel
        toggleLeft() {
                this.leftExpanded = !this.leftExpanded
                if (this.leftExpanded) {
                        this.rightExpanded = false
                }
        }

        //Toggles the right expansion panel
        toggleRight() {
                this.rightExpanded = !this.rightExpanded
                if (this.rightExpanded) {
                        this.leftExpanded = false
                }
        }

        //Toggles the middle expansion panel
        toggleMiddle() {
                this.rightExpanded = false
                this.leftExpanded = false
        }
} 