import { Component } from "@angular/core"
import { ChatsService } from "../../../services/chats"

@Component({
        selector: "app-chat-selection",
        templateUrl: "chat-selection.html",
        styleUrls: ["chat-selection.css"]
})
export class ChatSelectionComponent {
        
        constructor(private chatsService: ChatsService) {}
}