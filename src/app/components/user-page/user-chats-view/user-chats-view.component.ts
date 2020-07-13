import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../../services/chats"
import { UserService } from "../../../services/user"
import { User } from 'src/app/models/user'
import { Subscription } from 'rxjs'

@Component({
        selector: "app-user-chats-view",
        templateUrl: "user-chats-view.component.html",
        styleUrls: ["user-chats-view.component.css"]
})
export class UserChatsViewComponent {
        user: User
        userSub: Subscription
        constructor(private userService: UserService) {}

        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                        })
                this.userService.getUser()
        }

        //Get chat Ids from user chatIds list
        getChatIds() {
                if (this.user === undefined || this.user === null) return []
                var chatIds = []
                for (var i = 0; i < this.user.chatIds.length; i++) {
                        chatIds.push(this.user.chatIds[i])
                }
                return chatIds
        }

        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}