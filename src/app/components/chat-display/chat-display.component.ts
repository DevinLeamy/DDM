import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../services/chats"
import { Subscription } from "rxjs"

@Component({
  selector: "app-chat-display",
  templateUrl: "chat-display.component.html",
  styleUrls: ["chat-display.component.css"]
})
export class ChatDisplayComponent {
  chatIdsSub: Subscription
  chatIds: string[] = []
  constructor(private chatsService: ChatsService) {}

  //Gets chat ids
  ngOnInit() {
    this.chatIdsSub = this.chatsService.getChatIdsUpdated()
      .subscribe(chatIds => {
        this.chatIds = chatIds
      })
    this.chatsService.getChatIds()
  }


  //Avoid memory leaks
  ngOnDestroy() {
    this.chatIdsSub.unsubscribe()
  }
}
