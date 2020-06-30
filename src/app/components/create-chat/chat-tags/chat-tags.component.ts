import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../../services/chats"

@Component({
        selector: "app-chat-tags",
        templateUrl: "chat-tags.component.html",
        styleUrls: ["chat-tags.component.css"]
})
export class ChatTagsComponent {
        chatTags: string[]
        options: string[]

        constructor(private chatsService: ChatsService) {}

        //Adds a new tag to the list of tags
        addTag(newTag: string) {
                this.chatTags.push(newTag)
        }

        //Removes existing tag from this of tags
        removeTag(tagToRemove: string) {
                this.chatTags = this.chatTags.filter(tag => {tag !== tagToRemove})
        }

        updateOptions(queryText: string) {
                // this.chatsService.getTags(queryText) 
        }



}