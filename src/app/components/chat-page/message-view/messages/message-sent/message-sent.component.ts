import { Component, OnInit, OnDestroy } from '@angular/core'
import { User } from "../../../../../models/user"
import { Subscription } from "rxjs"
import { UserService } from "../../../../../services/user"

@Component({
  selector: "app-message-sent",
  templateUrl: "message-sent.component.html",
  styleUrls: ["message-sent.component.css"]
})
export class MessageSentComponent {
  user: User
  userSub: Subscription

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
      })
    this.userService.getUser()
  }

  //Avoid memory leaks
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
