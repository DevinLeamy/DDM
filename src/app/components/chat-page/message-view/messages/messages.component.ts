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

        //Compresses messages
        compressMessages(messages: Message[]) : Message[] {
                if (messages === undefined || messages === null || messages.length == 0) return []
                var compressedMessages: Message[] = [{...messages[0]}]
                for (var i = 1; i < messages.length; i++) {
                        var len = compressedMessages.length
                        if (messages[i].senderId == compressedMessages[len-1].senderId) {
                                compressedMessages[len-1].text = compressedMessages[len-1].text
                                        .concat("\n", messages[i].text)
                        } else {
                                compressedMessages.push({...messages[i]})
                        }
                }
                return compressedMessages
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
                try {
                        var currentPos = this.messageContainer.nativeElement.scrollHeight
                        this.messageContainer.nativeElement.scrollTop = currentPos
                } catch(err) {}
        }

        //Avoid memory leak
        ngOnDestroy() {
                this.userSub.unsubscribe()
                this.chatSub.unsubscribe()
        }
}
