import { Component, OnInit } from "@angular/core"
import { ChatsService } from 'src/app/services/chats';

@Component({
        selector: "app-popular-chats",
        templateUrl: "popular-chats.component.html",
        styleUrls: ["popular-chats.component.css"]
})
export class PopularChatsComponent implements OnInit {
        chatIds: string[] = []
        constructor(private chatsService: ChatsService) {}

        ngOnInit() {
                this.chatsService.getPopularChatIds()
                        .then( (chatIds: string[]) => {
                                this.chatIds = chatIds
                        })
        }
}