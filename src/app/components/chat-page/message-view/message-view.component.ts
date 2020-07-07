import { Component, OnInit, OnDestroy } from '@angular/core'
import { UserService } from '../../../services/user'
import { User } from 'src/app/models/user'
import { Subscription } from 'rxjs'
import { Chat } from 'src/app/models/chat'
import { ChatService } from "../../../services/chat"

@Component({
  selector: "app-message-view",
  templateUrl: "message-view.component.html",
  styleUrls: ["message-view.component.css"]
})
export class MessageViewComponent {
  chat: Chat
  chatSub: Subscription
  user: User
  userSub: Subscription

  constructor(private userService: UserService, private chatService: ChatService) {}

  //Keeping the user object updated
  ngOnInit() {
    //Creates link to UserService user
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
      })
    this.userService.getUser()
    //Creates link to ChatService chat
    this.chatSub = this.chatService.getChatUpdated()
      .subscribe(chat => this.chat = chat)
    this.chatService.getChat()
  }

  

  //Avoid memory leak
  ngOnDestroy() {
    this.userSub.unsubscribe()
    this.chatSub.unsubscribe()
  }
}
