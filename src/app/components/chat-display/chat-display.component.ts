import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../services/chats"
import { Subscription } from "rxjs"
import { Chat } from "../../models/chat"


@Component({
  selector: "app-chat-display",
  templateUrl: "chat-display.component.html",
  styleUrls: ["chat-display.component.css"]
})
export class ChatDisplayComponent {
  chatsSub: Subscription
  chats: Chat[] = []
  constructor(private chatsService: ChatsService) {}

  //Gets chat ids
  ngOnInit() {
    this.chatsSub = this.chatsService.getChatsUpdated()
      .subscribe(chats => {
        this.chats = chats
      })
    this.chatsService.getChats()
  }


  //Avoid memory leaks
  ngOnDestroy() {
    this.chatsSub.unsubscribe()
  }
}
