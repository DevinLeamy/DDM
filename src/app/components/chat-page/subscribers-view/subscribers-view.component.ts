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
        constructor(private chatService: ChatService) {}

        //Initialize chat object
        ngOnInit() {
                this.chatSub = this.chatService.getChatUpdated()
                        .subscribe(chat => {
                                this.chat = chat
                                console.log("List of subs updated \n Sub count: " + this.chat.subs.length)
                        })
                this.chatService.getChat()
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.chatSub.unsubscribe()
        }
}

