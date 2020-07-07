import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatService } from "../../../../services/chat"
import { AuthenticationService } from "../../../../services/authentication"
import { UserService } from "../../../../services/user"
import { Subscription } from "rxjs"
import { User } from "../../../../models/user"
import { ChatSub } from 'src/app/models/chat-sub'
import { UsersService } from 'src/app/services/users'
import { UserSub } from "../../../../models/user-sub"

@Component({
        selector: "app-chat-subscribe",
        templateUrl: "chat-subscribe.component.html",
        styleUrls: ["chat-subscribe.component.css"]
})
export class ChatSubscribeComponent {
        user: User
        userSub: Subscription
        constructor(private chatService: ChatService, private authService: AuthenticationService, private userService: UserService, private usersService: UsersService) {}

        //Initializes user object and user subscription
        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe( user => {
                                this.user = user
                        })
                this.userService.getUser()
        }

        isAdmin() {
                if (this.user === undefined || this.user === null) return false
                return this.chatService.isAdmin(this.user._id)
        }

        //Subscribes user to chat if the user is logged in and has not yet subscribed
        subscribe() {
                this.chatService.subscribeToChat().then(
                        () =>  {
                                if (this.usersService.getUserSub(this.user._id) === null || this.usersService.getUserSub(this.user._id) === undefined) {
                                this.usersService.getUser(this.user._id)
                                        .then( (userSub: UserSub ) => {
                                                this.usersService.users.push(userSub)
                                                this.usersService.updateUsers()
                                        })
                                }
                                this.userService.getUser(true)
                        }
                ).catch((reject) => console.log(reject))
        }

        //Unsubscribes user from chat if the user is logged in and is already subscribed
        unsubscribe() {
                this.chatService.unsubscribeFromChat().then(
                        () => this.userService.getUser(true)
                ).catch((reject) => console.log(reject))
        }

        //Checks if user has logged in 
        isAuthenticated() {
                return this.authService.isAuthenticated()
        }

        //Checks if user is subscribed to the chat
        isSubscribed() {
                if (this.chatService.chatId === undefined || this.chatService.chatId === null || this.user === null || this.user === undefined) return false
                const chat: ChatSub = this.chatService.getChatSub()
                // if (chat == undefined || chat == null || this.user == undefined || this.user == null) return false
                for (var i = 0; i < this.user.chatSubs.length; i++) {
                        if (this.user.chatSubs[i]._id === chat._id) {
                                return true
                        }
                }
                return false
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}