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
  styleUrls: ["create-chat.component.css"],
  providers: [ChatsService] //I do not know if the chats service has been made a provider for a different component
})
export class CreateChatComponent {
  categories: Category[] = [
    { _id: "0", name: "Science and Tech" },
    { _id: "1", name: "Food" },
    { _id: "2", name: "Esports" }
  ]
  user: User;
  userSub: Subscription
  constructor(private chatsService: ChatsService, private userService: UserService) {}

  ngOnInit() {
    this.chatsService.initNewChat()
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
        name: "test" 
        //this.categories[chatForm.value.category].name
      }
      this.chatsService.postChat(title, this.user._id, category, true)
      chatForm.resetForm()
    }
  }

  //Avoid memory leaks
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
