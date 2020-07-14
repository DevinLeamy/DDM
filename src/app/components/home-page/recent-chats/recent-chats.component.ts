import { Component, OnInit } from "@angular/core"
import { ChatsService } from 'src/app/services/chats';

@Component({
        selector: "app-recent-chats",
        templateUrl: "recent-chats.component.html",
        styleUrls: ["recent-chats.component.css"]
})
export class RecentChatsComponent implements OnInit {
        chatIds: string[] = []
        constructor(private chatsService: ChatsService) {}

        ngOnInit() {
                this.chatsService.getRecentChatIds()
                        .then( (chatIds: string[]) => {
                                this.chatIds = chatIds
                        })
        }
}