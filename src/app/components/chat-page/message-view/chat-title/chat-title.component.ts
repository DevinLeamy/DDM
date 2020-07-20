import { Component, Input } from "@angular/core"
import { Subscription } from 'rxjs'
import { Chat } from 'src/app/models/chat'
import { ChatService } from "../../../../services/chat"
import { ChatsService } from "../../../../services/chats"

@Component({
        selector: "app-chat-title",
        templateUrl: "chat-title.component.html",
        styleUrls: ["chat-title.component.css"]
})
export class ChatTitleComponent {
        chatSub: Subscription
        chat: Chat
        @Input() onChatPage: boolean = false
        constructor(private chatService: ChatService, public chatsService: ChatsService) {}

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