import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../../../services/chats"
import { ChatService } from "../../../../services/chat"
import { Subscription } from "rxjs"

@Component({
        selector: "app-related-chats",
        templateUrl: "related-chats.component.html",
        styleUrls: ["related-chats.component.css"]
})
export class RelatedChatsComponent implements OnInit, OnDestroy {
        chatIds: string[] = []
        queried: boolean = false
        chatSub: Subscription
        constructor(private chatsService: ChatsService, private chatService: ChatService) {}
        ngOnInit() {
                
                this.chatSub = this.chatService.getChatUpdated()
                        .subscribe((chat) => {
                                if (this.queried) return
                                this.queried = true
                                this.chatsService.getRelatedChatIds(chat.tags, chat.category, chat._id)
                                        .then((chatIds: string[]) => {
                                                this.chatIds = chatIds
                                                this.chatsService.getChats(chatIds)
                                        })
                        })
                this.chatService.getChat()
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.chatSub.unsubscribe()
        }
        
}