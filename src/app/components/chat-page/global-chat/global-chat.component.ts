import { Component, OnInit } from '@angular/core'
import { ChatService } from 'src/app/services/chat';
import { ActivatedRoute } from '@angular/router'
import { UsersService } from 'src/app/services/users';
import { Subscription } from 'rxjs';
import { Chat } from "../../../models/chat"


@Component({
  selector: "app-global-chat",
  templateUrl: "global-chat.component.html",
  styleUrls: ["global-chat.component.css"],
  providers: [ChatService, UsersService]
})
export class GlobalChatComponent {
  chatId: string
  chatSub: Subscription
  constructor(private chatService: ChatService, private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit() {
    //Set chatId from router link id
    this.route.params
      .subscribe(params => {
        this.chatId = params["id"]
        this.chatService.initChatService(this.chatId)
        this.chatService.getChat()
        this.chatSub = this.chatService.getChatUpdated()
          .subscribe((chat: Chat) => {
            if (this.usersService.users === null || this.usersService.users === undefined) {
              var userIds = []
              for (var i = 0; i < chat.subs.length; i++) {
                const userId = chat.subs[i]
                if (userIds.indexOf(userId) === -1 && !this.usersService.getUserSub(userId)) {
                  userIds.push(userId)
                }
              }
              for (var i = 0; i < chat.messages.length; i++) {
                const userId = chat.messages[i].senderId
                if (userIds.indexOf(userId) === -1 && !this.usersService.getUserSub(userId)) {
                  userIds.push(userId)
                }
              }
              this.usersService.getUsers(userIds)
            }
          })
      })
  }
}
