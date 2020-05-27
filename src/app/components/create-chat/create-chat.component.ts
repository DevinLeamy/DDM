import { Component, Input } from "@angular/core"
import { ChatsService } from "../../services/chats"
import { NgForm } from '@angular/forms'
import { Category } from "../../models/category"

@Component({
  selector: "app-create-chat",
  templateUrl: "create-chat.component.html",
  styleUrls: ["create-chat.component.css"]
})
export class CreateChatComponent {
  /*
  Temp 
  -categories will be stored in a database
  */
  categories: Category[] = [
    { _id: "0", name: "Science and Tech" },
    { _id: "1", name: "Food" },
    { _id: "2", name: "Esports" }
  ];
  constructor(private chatsService: ChatsService) {}

  createChat(chatForm: NgForm) {
    if (!chatForm.invalid) {
      const title = chatForm.value.title
      const categoryId = chatForm.value.category
      console.log(categoryId)
      const categoryName = this.categories[parseInt(categoryId)].name
      console.log(categoryName, categoryId)
      return
      this.chatsService.postChat(title)
      chatForm.resetForm()
    }
  }
}
