import { Component, OnInit, OnDestroy } from '@angular/core'
import { UserService } from "../../../../../services/user"
import { User } from 'src/app/models/user'
import { Subscription } from 'rxjs'

@Component({
  selector: "app-message-received",
  templateUrl: "message-received.component.html",
  styleUrls: ["message-received.component.css"]
})
export class MessageReceivedComponent {
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
