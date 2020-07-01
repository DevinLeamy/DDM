import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../../services/chats"
import { NgForm } from '@angular/forms'

@Component({
        selector: "app-chat-tags",
        templateUrl: "chat-tags.component.html",
        styleUrls: ["chat-tags.component.css"]
})
export class ChatTagsComponent {
        chatTags: string[] = ["cats", "dogs", "fish", "salamander", "computer-programming", "physics", "clash-royale", "dota", "abc's"]
        options: string[]

        constructor(private chatsService: ChatsService) {}

        //Adds a new tag to the list of tags
        addTag(tagForm: NgForm) {
                const newTag = tagForm.value.tag
                if (newTag === null || newTag === undefined || newTag === "") tagForm.resetForm()
                else {
                        this.chatTags.push(newTag)
                        tagForm.resetForm()
                }
        }

        //Removes existing tag from this of tags
        removeTag(tagToRemove: string) {
                this.chatTags = this.chatTags.filter(tag => {tag !== tagToRemove})
        }

        updateOptions(queryText: string) {
                // this.chatsService.getTags(queryText) 
        }



}