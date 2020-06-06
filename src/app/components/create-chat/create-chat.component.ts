import { Component, Input, OnInit, OnDestroy } from "@angular/core"
import { ChatsService } from "../../services/chats"
import { NgForm } from '@angular/forms'
import { Category } from "../../models/category"
import { UserService } from "../../services/user"
import { User } from "../../models/user"
import { Subscription } from 'rxjs'
import { UserSub } from 'src/app/models/user-sub'

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
  ]
  user: User;
  userSub: Subscription
  constructor(private chatsService: ChatsService, private userService: UserService) {}

  ngOnInit() {
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
      })
    this.userService.getUser()
  }


  createChat(chatForm: NgForm) {
    if (!chatForm.invalid) {
      //TODO: Handle case when the chat category has yet to be set
      const title = chatForm.value.title
      const category: Category = {
        _id: chatForm.value.category,
        name: this.categories[chatForm.value.category].name
      }
      const admin: UserSub = {_id: this.user._id, username: this.user.username}
      this.chatsService.postChat(title, admin, category, true)
      chatForm.resetForm()
    }
  }

  //Avoid memory leaks
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
