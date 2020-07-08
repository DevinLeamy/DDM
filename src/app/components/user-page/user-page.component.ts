import { Component, OnInit, OnDestroy } from "@angular/core"
import { UserService } from "../../services/user"
import { Subscription } from "rxjs"
import { User } from 'src/app/models/user'
import { AuthenticationService } from 'src/app/services/authentication'
import { ChatsService } from 'src/app/services/chats'

@Component({
        selector: "app-user-page",
        templateUrl: "user-page.component.html",
        styleUrls: ["user-page.component.css"],
        providers: [ChatsService]
})
export class UserPageComponent {
        user: User
        userSub: Subscription
        constructor(private userService: UserService, private authService: AuthenticationService, private chatsService: ChatsService) {}

        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
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