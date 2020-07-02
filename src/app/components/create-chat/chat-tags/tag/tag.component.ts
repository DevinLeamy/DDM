import { Component, Input } from "@angular/core"
import { ChatsService } from 'src/app/services/chats'

@Component({
        selector: "app-tag",
        templateUrl: "tag.component.html",
        styleUrls: ["tag.component.css"]
})
export class TagComponent {
        @Input() tagText: string

        constructor(private chatsService: ChatsService) {}

        //Removes existing tag from this of tags
        removeTag() {
                this.chatsService.removeTag(this.tagText)
        }

}