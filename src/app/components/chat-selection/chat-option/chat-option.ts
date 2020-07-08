import { Component, Input } from "@angular/core"
import { ChatsService } from 'src/app/services/chats'

@Component({
        selector: "app-chat-option",
        templateUrl: "chat-option.html",
        styleUrls: ["chat-option.css"]
})
export class ChatOptionComponent {
        @Input() chatId: string

        constructor(private chatsService: ChatsService) {}

        //Get chat sub
        getChatSub() {
                if (this.chatsService.getChatSub(this.chatId)) {
                        return this.chatsService.getChatSub(this.chatId)
                }
                return {
                        _id: "-----",
                        title: "loading...",
                        image: "$$$Default$$$",
                        tags: [],
                        subCount: 0
                }
        }
}