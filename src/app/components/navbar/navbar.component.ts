import { Component, OnInit, OnDestroy } from "@angular/core"
import { AuthenticationService } from "../../services/authentication"
import { UserService } from "../../services/user"
import { Subscription } from 'rxjs'
import { User } from 'src/app/models/user'

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"]
})
export class NavbarComponent {
  userSub : Subscription
  user : User
  constructor(private authService : AuthenticationService, private userService : UserService) {}

  ngOnInit() {
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
    })
    this.userService.getUser()
  }

  //Checks if user is logged in
  isAuthenticated() {
    return this.authService.isAuthenticated()
  }

  //Avoids memory leak
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
