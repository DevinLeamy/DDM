import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatService } from "../../../services/chat"
import { Chat } from 'src/app/models/chat'
import { Subscription } from 'rxjs'

@Component({
        selector: "app-subscribers-view",
        templateUrl: "subscribers-view.component.html",
        styleUrls: ["subscribers-view.component.css"]
})
export class SubscribersViewComponent {
        chat: Chat
        chatSub: Subscription
        constructor(private chatService: ChatService){}

        //Initialize chat object
        ngOnInit() {
                this.chatSub = this.chatService.getChatUpdated()
                        .subscribe(chat => {
                                //Remove if and move this.chatService.getUsers() to after this.chatService.getChat()
                                if (this.chat == undefined || this.chat == null) {
                                        //First time the chat object is being updated
                                        this.chatService.getUsers()
                                }
                                this.chat = chat
                        })
                this.chatService.getChat()
        }

        //Get username for user with given id
        getUserUsername(userId: string) {
                const username = this.chatService.getUserUsername(userId)
                return username
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.chatSub.unsubscribe()
        }
}

