import { Component, OnInit } from '@angular/core'
import { ChatService } from 'src/app/services/chat';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: "app-global-chat",
  templateUrl: "global-chat.component.html",
  styleUrls: ["global-chat.component.css"],
  providers: [ChatService]
})
export class GlobalChatComponent {
  chatId: string
  constructor(private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit() {
    //Set chatId from router link id
    this.route.params
      .subscribe(params => {
        this.chatId = params["id"]
        this.chatService.initChatService(this.chatId)
        this.chatService.getChat()
      })
  }
}
