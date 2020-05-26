import { Component } from "@angular/core"
import { ChatsService } from "../../services/chats"
import { NgForm } from '@angular/forms'

@Component({
  selector: "app-create-chat",
  templateUrl: "create-chat.component.html",
  styleUrls: ["create-chat.component.css"]
})
export class CreateChatComponent {
  constructor(private chatsService: ChatsService) {}

  createChat(chatForm: NgForm) {
    if (!chatForm.invalid) {
      const title = chatForm.value.title
      this.chatsService.postChat(title)
      chatForm.resetForm()
    }
  }
}
