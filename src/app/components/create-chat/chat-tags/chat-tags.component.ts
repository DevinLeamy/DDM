import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../../services/chats"
import { NgForm } from '@angular/forms'
import { Chat } from 'src/app/models/chat'
import { Subscription } from 'rxjs'

@Component({
        selector: "app-chat-tags",
        templateUrl: "chat-tags.component.html",
        styleUrls: ["chat-tags.component.css"]
})
export class ChatTagsComponent {
        newChat: Chat
        newChatSub: Subscription

        constructor(private chatsService: ChatsService) {}

        ngOnInit() {
                this.newChatSub = this.chatsService.getNewChatUpdated()
                        .subscribe(chat => { 
                                this.newChat = chat
                        })
                this.chatsService.updateNewChat()
        }

        //Adds a new tag to the list of tags
        addTag(tagForm: NgForm) {
                const newTag = tagForm.value.tag.trim().toLowerCase().split(/\s+/g).join('‑')
                if (!(newTag === null || newTag === undefined || newTag === "" || newTag === "new tag")) {
                        this.chatsService.addTag(newTag)
                }
                tagForm.resetForm()
        }

        updateOptions(queryText: string) {
                // this.chatsService.getTags(queryText) 
        }

        ngOnDestroy() {
                this.newChatSub.unsubscribe()
        }
}