import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatService } from "../../../../services/chat"
import { AuthenticationService } from "../../../../services/authentication"
import { UserService } from "../../../../services/user"
import { Subscription } from "rxjs"
import { User } from "../../../../models/user"

@Component({
        selector: "app-chat-subscribe",
        templateUrl: "chat-subscribe.component.html",
        styleUrls: ["chat-subscribe.component.css"]
})
export class ChatSubscribeComponent {
        user: User
        userSub: Subscription
        constructor(private chatService: ChatService, private authService: AuthenticationService, private userService: UserService) {}

        //Initializes user object and user subscription
        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe( user => {
                                this.user = user
                        })
                this.userService.getUser()
        }

        //Subscribes user to chat if the user is logged in and has not yet subscribed
        subscribe() {
                this.chatService.subscribeToChat().then(
                        () => this.userService.getUser()
                ).catch((reject) => console.log(reject))
        }

        //Checks if user has logged in 
        isAuthenticated() {
                return this.authService.isAuthenticated()
        }

        //Checks if user is subscribed to the chat
        isSubscribed() {
                const chatId = this.chatService.getChatId()
                if (chatId == undefined || chatId == null || this.user == undefined || this.user == null) return false
                if (this.user.subIds.includes(chatId)) return true
                else return false
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}