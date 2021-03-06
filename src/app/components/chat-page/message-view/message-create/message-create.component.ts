import { Component, OnInit, OnDestroy } from '@angular/core'
import { ChatService } from '../../../../services/chat'
import { AuthenticationService } from "../../../../services/authentication"
import { UserService } from '../../../../services/user'
import { User } from '../../../../models/user'
import { Subscription } from 'rxjs'
import { NgForm } from '@angular/forms'
import { UsersService } from 'src/app/services/users'
import { UserSub } from 'src/app/models/user-sub'

@Component({
  selector: "app-message-create",
  templateUrl: "message-create.component.html",
  styleUrls: ["message-create.component.css"]
})
export class MessageCreateComponent {
  user: User
  userSub: Subscription
  constructor(private userService: UserService, private chatService: ChatService, private authService: AuthenticationService, private usersService: UsersService) {}

  //Initializes link to UserService user
  ngOnInit() {
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
      })
    this.userService.getUser()
  }

  //Requests message post to database
  postMessage(messageForm: NgForm) {
    const message = messageForm.value.message.trim()
    if (message == "" || message == null || message == undefined) {return}
    let timestamp = new Date().getTime()
    this.chatService.postMessage(message, this.user._id, timestamp)
    if (this.usersService.getUserSub(this.user._id) === null || this.usersService.getUserSub(this.user._id) === undefined) {
      this.usersService.getUser(this.user._id)
        .then( (userSub: UserSub ) => {
          this.usersService.users.push(userSub)
          this.usersService.updateUsers()
        })
    }
    messageForm.resetForm()
  }

  //Check if user is authenticated
  isAuthenticated() {
    return this.authService.isAuthenticated()
  }

  //Avoid memory leaks
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }

}
