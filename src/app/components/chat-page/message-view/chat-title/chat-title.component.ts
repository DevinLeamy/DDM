import { Component } from "@angular/core"
import { Subscription } from 'rxjs'
import { Chat } from 'src/app/models/chat'
import { ChatService } from "../../../../services/chat"

@Component({
        selector: "app-chat-title",
        templateUrl: "chat-title.component.html",
        styleUrls: ["chat-title.component.css"]
})
export class ChatTitleComponent {

        chatSub: Subscription
        chat: Chat
        constructor(private chatService: ChatService) {}

        ngOnInit() {
                this.chatSub = this.chatService.getChatUpdated()
                        .subscribe(chat => {
                                this.chat = chat
                        })
                this.chatService.getChat()
        }

        ngOnDestroy() {
                this.chatSub.unsubscribe()
        }
        
}