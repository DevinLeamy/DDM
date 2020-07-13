import { Component, Input } from "@angular/core"

@Component({
        selector: "app-chat-selection",
        templateUrl: "chat-selection.html",
        styleUrls: ["chat-selection.css"]
})
export class ChatSelectionComponent {
        @Input() chatIds: string[]
        @Input("color") color: string = "white"
}