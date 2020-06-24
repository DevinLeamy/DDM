import { Component, Input } from '@angular/core'
import { ChatService } from 'src/app/services/chat'

@Component({
        selector: "app-chat-icon",
        templateUrl: "chat-icon.component.html",
        styleUrls: ["chat-icon.component.css"],
        providers: [ChatService]
})
export class ChatIconComponent {
       @Input() chatId: string

       constructor(private chatService: ChatService) {}

        ngOnInit() {
                this.chatService.initChatService(this.chatId)
                this.chatService.getChat()
        }

}