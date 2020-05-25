import { Component } from "@angular/core"
import { ChatService } from "../../services/chat"
import { NgForm } from '@angular/forms'

@Component({
  selector: "app-create-chat",
  templateUrl: "create-chat.component.html",
  styleUrls: ["create-chat.component.css"]
})
export class CreateChatComponent {
  constructor(private chatService: ChatService) {}

  createChat(chatForm: NgForm) {
    if (!chatForm.invalid) {
      const title = chatForm.value.title
      this.chatService.postChat(title)
      chatForm.resetForm()
    }
  }
}
