import { Component, OnInit, OnDestroy } from "@angular/core"
import { NgForm } from '@angular/forms'
import { Chat } from 'src/app/models/chat'
import { Subscription } from 'rxjs'
import { ChatCreateService } from 'src/app/services/chat-create'

@Component({
        selector: "app-chat-tags",
        templateUrl: "chat-tags.component.html",
        styleUrls: ["chat-tags.component.css"]
})
export class ChatTagsComponent implements OnInit, OnDestroy{
        newChat: Chat
        newChatSub: Subscription

        constructor(private chatCreateService: ChatCreateService) {}

        ngOnInit() {
                this.newChatSub = this.chatCreateService.getNewChatUpdated()
                        .subscribe(chat => { 
                                this.newChat = chat
                        })
                this.chatCreateService.updateNewChat()
        }

        //Adds a new tag to the list of tags
        addTag(tagForm: NgForm) {
                const newTag = this.fixTag(tagForm
                                .value
                                .tag
                                .trim()
                                .toLowerCase()
                        )
                        .split(/\s+/g)
                        .join('‑')
                if (!(newTag === null || newTag === undefined || newTag === "" || newTag === "new tag")) {
                        this.chatCreateService.addTag(newTag)
                }
                tagForm.resetForm()
        }

        //Replace underscores and hyphens with no breakable hyphen
        fixTag(tag: string) {
                for (var i = 0; i < tag.length; i++) {
                        if (tag[i] === '_' || tag[i] === '-') {
                                tag = this.replaceAt(tag, i, '‑')
                        }
                }
                return tag
        }

        //Replace character at index
        replaceAt(current: string, index: number, replacement: string) {
                return current.substr(0, index) + replacement + current.substr(index + replacement.length);
        }


        updateOptions(queryText: string) {
                // this.chatsService.getTags(queryText) 
        }

        ngOnDestroy() {
                this.newChatSub.unsubscribe()
        }
}