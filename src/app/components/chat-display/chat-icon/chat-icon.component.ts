import { Component, Input } from '@angular/core'

@Component({
        selector: "app-chat-icon",
        templateUrl: "chat-icon.component.html",
        styleUrls: ["chat-icon.component.css"]
})
export class ChatIconComponent {
        /*Each chat icon with have
        -A title that shows on hover
        -An image [preset for now]    
        -A label indicating the number of subscribed users
        -A label indicating the number of active [currently on the chat] users
        */
       @Input() chatTitle: string
       @Input() chatId: string
}