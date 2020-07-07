import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatService } from "../../../services/chat"
import { Chat } from 'src/app/models/chat'
import { Subscription } from 'rxjs'
import { UsersService } from 'src/app/services/users'

@Component({
        selector: "app-subscribers-view",
        templateUrl: "subscribers-view.component.html",
        styleUrls: ["subscribers-view.component.css"]
})
export class SubscribersViewComponent implements OnInit, OnDestroy {
        chat: Chat
        chatSub: Subscription
        constructor(private chatService: ChatService, private usersService: UsersService) {}

        //Initialize chat object
        ngOnInit() {
                this.chatSub = this.chatService.getChatUpdated()
                        .subscribe(chat => {
                                this.chat = chat
                                // console.log("List of subs updated \n Sub count: " + this.chat.subs.length)
                        })
                this.chatService.getChat()
        }

        getUserSub(subId: string) {
                if (this.usersService.getUserSub(subId)) {
                        return this.usersService.getUserSub(subId)
                }
                return {
                        _id: "-----",
                        username: "loading...",
                        image: "$$$Default$$$",
                        online: false
                }
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.chatSub.unsubscribe()
        }
}

