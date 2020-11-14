import { Component, OnInit, OnDestroy } from "@angular/core"
import { AuthenticationService } from "../../services/authentication"
import { UserService } from "../../services/user"
import { Subscription } from 'rxjs'
import { User } from 'src/app/models/user'
import { Location } from "@angular/common";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  userSub : Subscription
  user : User
  constructor(private authService : AuthenticationService, private userService : UserService, private location : Location) {}

  ngOnInit() {
    this.userSub = this.userService.getUserUpdated()
      .subscribe(user => {
        this.user = user
      })
    if (this.authService.isAuthenticated()) {
      this.userService.getUser()
    }
  }

  //Checks if user is logged in
  isAuthenticated() {
    return this.authService.isAuthenticated()
  }

  // logout of keycloak register page
  logoutWithKeycloak() {
	  const keycloakLogoutUrl: string = "https://ddm-rumble-keycloak.herokuapp.com/logout"; 
	  window.location.href = keycloakLogoutUrl;
	  console.log("logout of keycloak");
  }

  // redirect to keycloack login page
  loginWithKeycloak() {
    console.log("redirecting to keycloak login page");
    this.authService.login()
  }
  //Avoids memory leak
  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
