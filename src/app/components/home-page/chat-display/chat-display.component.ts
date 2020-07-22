import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../../services/chats"
import { Subscription } from "rxjs"
import { Chat } from "../../../models/chat"
import { UsersService } from 'src/app/services/users'
import { ChatService } from 'src/app/services/chat'


@Component({
  selector: "app-chat-display",
  templateUrl: "chat-display.component.html",
  styleUrls: ["chat-display.component.css"]
})
export class ChatDisplayComponent implements OnInit, OnDestroy {
  selectedChatSub: Subscription
  selectedChat: Chat
  selectedChatIdSub: Subscription
  constructor(public chatsService: ChatsService, private chatService: ChatService, private usersService: UsersService) {}

  ngOnInit() {
   this.selectedChatIdSub = this.chatsService.getSelectedChatIdUpdated()
    .subscribe((chatId: string) => {
      if (this.selectedChat !== undefined && this.selectedChat._id === chatId) return
      this.chatService.setChatId(chatId)
      this.selectedChatSub = this.chatService.getChatUpdated()
        .subscribe(chat => {
          if (this.selectedChat === undefined || this.selectedChat === null || this.selectedChat._id !== this.chatsService.selectedChatId) {
            this.selectedChat = chat
            var userIds = []
            for (var i = 0; i < this.selectedChat.subs.length; i++) {
              const userId = this.selectedChat.subs[i]
              if (!this.usersService.containsUserSub(userId) && userIds.indexOf(userId) === -1) {
                userIds.push(userId)
              }
            }
            this.usersService.getUsers(userIds)
          }
        })
      this.chatService.getChat(true)
    })
  }
  //Avoid memory leaks
  ngOnDestroy() {
    if (this.selectedChatIdSub !== undefined && this.selectedChatIdSub === null) {
      this.selectedChatIdSub.unsubscribe()
    }
    if (this.selectedChatSub !== undefined && this.selectedChatSub !== null) {
      this.selectedChatSub.unsubscribe()
    }
  }
}
