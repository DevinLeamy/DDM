import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewChecked } from "@angular/core"
import { ChatService } from "../../../../services/chat"
import { UserService } from "../../../../services/user"
import { Message } from "../../../../models/message"
import { Chat } from "../../../../models/chat"
import { User } from "../../../../models/user"
import { Subscription } from "rxjs"

@Component({
        selector: "app-messages",
        templateUrl: "messages.component.html",
        styleUrls: ["messages.component.css"]
})
export class MessagesComponent {
        @ViewChild("messages") private messageContainer: ElementRef
        chat: Chat
        chatSub: Subscription
        user: User
        userSub: Subscription

        constructor(private userService: UserService, private chatService: ChatService) {}

        //Keeping the user object updated
        ngOnInit() {
                //Scrolls to most recent messages
                this.scrollToBottom();
                //Creates link to UserService user
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                        })
                this.userService.getUser()
                
                //Creates link to ChatService chat
                this.chatSub = this.chatService.getChatUpdated()
                        .subscribe(chat => {
                                this.chat = chat
                                this.scrollToBottom()
                        })
                this.chatService.getChat()
        }

        ngAfterViewChecked() {
                this.scrollToBottom()
        }

        //Checks if logged in user sent the message
        sent(message: Message) : boolean {
                //Checks if user exists
                if (this.user == undefined || this.user == null) return false
                return message.senderId == this.user._id
        }
                
        //Checks if logged in user received the message
        received(message: Message) : boolean {
                return !this.sent(message)
        }

        //Scroll to most recent messages
        scrollToBottom() {
                console.log("Scrolling to bottom")
                try {
                        var currentPos = this.messageContainer.nativeElement.scrollHeight
                        this.messageContainer.nativeElement.scrollTop = currentPos
                        console.log(currentPos, this.messageContainer.nativeElement.scrollHeight)
                } catch(err) {
                        console.log(err)
                }
        }

        //Avoid memory leak
        ngOnDestroy() {
                this.userSub.unsubscribe()
                this.chatSub.unsubscribe()
        }
}
