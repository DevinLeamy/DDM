import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core"
import { ChatsService } from "../../../services/chats"
import { Subscription } from "rxjs"
import { Chat } from "../../../models/chat"
import { UsersService } from 'src/app/services/users'
import { ChatService } from 'src/app/services/chat'


@Component({
  selector: "app-chat-display",
  templateUrl: "chat-display.component.html",
  styleUrls: ["chat-display.component.css"],
  providers: [ChatService]
})
export class ChatDisplayComponent implements OnInit, OnDestroy {
  selectedChatSub: Subscription
  selectedChat: Chat
  selectedChatIdSub: Subscription
  @ViewChild("container") container: ElementRef
  @ViewChild("chatButton") chatButton: ElementRef
  constructor(private chatsService: ChatsService, private chatService: ChatService, private usersService: UsersService) {}

  ngOnInit() {
   this.selectedChatIdSub = this.chatsService.getSelectedChatIdUpdated()
    .subscribe((chatId: string) => {
      if (this.selectedChat !== undefined && this.selectedChat._id === chatId) return
      this.chatService.initChatService(chatId)
      this.selectedChatSub = this.chatService.getChatUpdated()
        .subscribe(chat => {
          this.selectedChat = chat
          this.usersService.users = undefined
          var userIds = []
          for (var i = 0; i < this.selectedChat.subs.length; i++) {
            const userId = this.selectedChat.subs[i]
            if (userIds.indexOf(userId) === -1) {
              userIds.push(userId)
            }
          }
          this.usersService.getUsers(userIds)
        })
      this.chatService.getChat(true)
    })
  }

  onContainerHover() {
    this.chatButton.nativeElement.style.opacity = 1
  }

  onContainerStopHover() {
    this.chatButton.nativeElement.style.opacity = 0
  }


  onButtonHover() {
    this.container.nativeElement.style.opacity = 0.4
  }

  onButtonStopHover() {
    this.container.nativeElement.style.opacity = 1
  }

  //Avoid memory leaks
  ngOnDestroy() {
    this.selectedChatIdSub.unsubscribe()
    this.selectedChatSub.unsubscribe()
  }
}
