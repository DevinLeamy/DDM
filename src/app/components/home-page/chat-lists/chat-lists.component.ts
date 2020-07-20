import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from 'src/app/services/chats';
import { Subscription } from 'rxjs';

@Component({
        selector: "app-chat-lists",
        templateUrl: "chat-lists.component.html",
        styleUrls: ["chat-lists.component.css"]
})
export class ChatListsComponent implements OnInit, OnDestroy {
        popChatIds: string[]
        recChatIds: string[]
        recomChatIds: string[]
        popChatIdsSub: Subscription
        recChatIdsSub: Subscription
        recomChatIdsSub: Subscription
        constructor(private chatsService: ChatsService) {}

        ngOnInit() {    
                this.popChatIdsSub = this.chatsService.getPopularChatIdsUpdated()
                        .subscribe(popChatIds => {
                                this.popChatIds = popChatIds
                                this.chatsService.getChats(this.popChatIds)
                                this.popChatIdsSub.unsubscribe()
                        })
                this.recomChatIdsSub = this.chatsService.getRecommendedChatIdsUpdated()
                        .subscribe(recomChatIds => {
                                this.recomChatIds = recomChatIds
                                this.chatsService.getChats(this.recomChatIds)
                                this.recomChatIdsSub.unsubscribe()
                        })
                this.recChatIdsSub = this.chatsService.getRecentChatIdsUpdated()
                        .subscribe(recChatIds => {
                                this.recChatIds = recChatIds
                                this.chatsService.getChats(this.recChatIds)
                                this.recChatIdsSub.unsubscribe()
                        })
                this.chatsService.getPopularChatIds()
                this.chatsService.getRecentChatIds()
                this.chatsService.getRecommendedChatIds()
        }

        ngOnDestroy() {
                this.popChatIdsSub.unsubscribe()
                this.recChatIdsSub.unsubscribe()
                this.recomChatIdsSub.unsubscribe()
        }
}