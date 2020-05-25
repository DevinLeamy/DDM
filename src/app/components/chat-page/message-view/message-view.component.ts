import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Message } from '../../../models/message'
import { UserService } from '../../../services/user'
import { User } from 'src/app/models/user'
import { Subscription } from 'rxjs'
import { Chat } from 'src/app/models/chat'
import { ChatService } from "../../../services/chat"
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: "app-message-view",
  templateUrl: "message-view.component.html",
  styleUrls: ["message-view.component.css"],
  providers: [ChatService]
})
export class MessageViewComponent {
  //Default empty Chat
  chat: Chat = {
    messages: [],
    title: "",
    _id: ""
  }
  //Chat Id
  chatId: string
  chatSub: Subscription
  user: User
  userSub: Subscription

  constructor(private userService: UserService, private chatService: ChatService, private route: ActivatedRoute) {}

  //Keeping the user object updated
  ngOnInit() {
    //Set chatId from router link
    this.route.params
      .subscribe(params => {
        this.chatId = params["id"]
    })
    //Creates link to UserService user
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
      })
    this.userService.getUser()
    //Sets chat service chatID
    this.chatService.initChatService(this.chatId)
    //Creates link to ChatService chat
    this.chatSub = this.chatService.getChatUpdated()
      .subscribe(chat => {
        this.chat = chat
      })
    this.chatService.getChat()
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

  //Avoid memory leak
  ngOnDestroy() {
    this.userSub.unsubscribe()
    this.chatSub.unsubscribe()
  }
}
