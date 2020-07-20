import { Component, OnInit, OnDestroy } from "@angular/core"
import { NgForm } from '@angular/forms'
import { UserService } from "../../services/user"
import { User } from "../../models/user"
import { Subscription } from 'rxjs'
import { AuthenticationService } from 'src/app/services/authentication'
import { ChatCreateService } from 'src/app/services/chat-create'

@Component({
  selector: "app-create-chat",
  templateUrl: "create-chat.component.html",
  styleUrls: ["create-chat.component.css"],
  providers: [ChatCreateService] 
})
export class CreateChatComponent implements OnInit, OnDestroy {
  categories: String[] = [
    "Science and Tech",
    "Entertainment",
    "Esports",
    "Sports",
    "Other"
  ]
  user: User;
  userSub: Subscription
  constructor(private chatCreateService: ChatCreateService, private userService: UserService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.chatCreateService.initNewChat()
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
      })
    this.userService.getUser()
  }

  isAuthenticated() {
    return this.authService.isAuthenticated()
  }


  createChat(chatForm: NgForm) {
    if (!chatForm.invalid) {
      //TODO: Handle case when the chat category has yet to be set
      const title = chatForm.value.title
      const category = chatForm.value.category
      this.chatCreateService.postChat(title, this.user._id, category, true)
      chatForm.resetForm()
    }
  }

  //Avoid memory leaks
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
