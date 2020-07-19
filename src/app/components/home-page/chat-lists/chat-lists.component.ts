import { Component, OnInit } from "@angular/core"
import { ChatsService } from 'src/app/services/chats';

@Component({
        selector: "app-chat-lists",
        templateUrl: "chat-lists.component.html",
        styleUrls: ["chat-lists.component.css"]
})
export class ChatListsComponent implements OnInit {
        chatIds: string[] = []
        popChatIds: string[] = []
        recChatIds: string[] = []
        recomChatIds: string[] = []
        constructor(private chatsService: ChatsService) {}

        ngOnInit() {    
                if (this.chatIds.length > 0) return 
                this.chatsService.getPopularChatIds()
                        .then((popChatIds: string[]) => this.chatsService.getRecentChatIds()
                                .then((recChatIds: string[]) => this.chatsService.getRecommendedChatIds()
                                        .then((recomChatIds: string[]) => {
                                                for (var i = 0; i < popChatIds.length; i++) {
                                                        const chatId = popChatIds[i]
                                                        if (this.chatIds.indexOf(chatId) === -1) {
                                                                this.chatIds.push(chatId)
                                                        }
                                                }
                                                for (var i = 0; i < recChatIds.length; i++) {
                                                        const chatId = recChatIds[i]
                                                        if (this.chatIds.indexOf(chatId) === -1) {
                                                                this.chatIds.push(chatId)
                                                        }
                                                }
                                                for (var i = 0; i < recomChatIds.length; i++) {
                                                        const chatId = recomChatIds[i]
                                                        if (this.chatIds.indexOf(chatId) === -1) {
                                                                this.chatIds.push(chatId)
                                                        }
                                                }
                                                this.popChatIds = popChatIds
                                                this.recChatIds = recChatIds
                                                this.recomChatIds = recomChatIds
                                        })
                                )
                        )
        }
}