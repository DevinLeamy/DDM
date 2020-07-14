import { Component, OnInit } from "@angular/core"
import { ChatsService } from 'src/app/services/chats';

@Component({
        selector: "app-recommended-chats",
        templateUrl: "recommended-chats.component.html",
        styleUrls: ["recommended-chats.component.css"]
})
export class RecommendedChatsComponent implements OnInit {
        chatIds: string[] = []
        constructor(private chatsService: ChatsService) {}

        ngOnInit() {
                this.chatsService.getRecommendedChatIds()
                        .then( (chatIds: string[]) => {
                                this.chatIds = chatIds
                        })
        }
}