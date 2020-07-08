import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../../services/chats"
import { Subscription } from "rxjs"
import { Chat } from "../../../models/chat"
import { UsersService } from 'src/app/services/users'


@Component({
  selector: "app-chat-display",
  templateUrl: "chat-display.component.html",
  styleUrls: ["chat-display.component.css"]
})
export class ChatDisplayComponent implements OnInit {
  chatsSub: Subscription
  chats: Chat[] = []
  constructor(private chatsService: ChatsService, private usersService: UsersService) {}

  //Gets chat ids
  ngOnInit() {
    // this.chatsSub = this.chatsService.getChatsUpdated()
    //   .subscribe(chats => {
    //     this.chats = chats
    //     var userIds = []
    //     for (var i = 0; i < this.chats.length; i++) {
          
    //       const chat = this.chats[i]
    //       for (var i = 0; i < chat.subs.length; i++) {
    //         const userId = chat.subs[i]._id
    //         if (userIds.indexOf(userId) === -1) {
    //           userIds.push(userId)
    //         }
    //       }
    //       for (var i = 0; i < chat.messages.length; i++) {
    //         const userId = chat.messages[i].senderId
    //         if (userIds.indexOf(userId) === -1) {
    //           userIds.push(userId)
    //         }
    //       }
    //     }
    //     this.usersService.getUsers(userIds)
    //   })
    // this.chatsService.getChats()
  }

  //Avoid memory leaks
  ngOnDestroy() {
    this.chatsSub.unsubscribe()
  }
}
