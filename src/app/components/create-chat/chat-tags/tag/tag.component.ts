import { Component, Input } from "@angular/core"
import { ChatCreateService } from 'src/app/services/chat-create'

@Component({
        selector: "app-tag",
        templateUrl: "tag.component.html",
        styleUrls: ["tag.component.css"]
})
export class TagComponent {
        @Input() tagText: string

        constructor(private chatCreateService: ChatCreateService) {}

        //Removes existing tag from this of tags
        removeTag() {
                this.chatCreateService.removeTag(this.tagText)
        }

}