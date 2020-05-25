import { Component, OnInit, OnDestroy } from "@angular/core"
import { ChatService } from "../../services/chat"
import { Subscription } from "rxjs"

@Component({
  selector: "app-chat-display",
  templateUrl: "chat-display.component.html",
  styleUrls: ["chat-display.component.css"]
})
export class ChatDisplayComponent {
  chatIdsSub: Subscription
  chatIds: string[] = []
  constructor(private chatService: ChatService) {}

  //Gets chat ids
  ngOnInit() {
    this.chatIdsSub = this.chatService.getChatIdsUpdated()
      .subscribe(chatIds => {
        this.chatIds = chatIds
      })
    this.chatService.getChatIds()
  }


  //Avoid memory leaks
  ngOnDestroy() {
    this.chatIdsSub.unsubscribe()
  }
}
