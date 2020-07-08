import { Component, OnInit, OnDestroy } from "@angular/core"
import { UserService } from "../../services/user"
import { Subscription } from "rxjs"
import { User } from 'src/app/models/user'
import { AuthenticationService } from 'src/app/services/authentication'

@Component({
        selector: "app-user-page",
        templateUrl: "user-page.component.html",
        styleUrls: ["user-page.component.css"]
})
export class UserPageComponent {
        //TODO: Block page from not-logged-in users
        user: User
        userSub: Subscription
        constructor(private userService: UserService, private authService: AuthenticationService) {}

        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                        })
                this.userService.getUser()
        }

        isAuthenticated() {
                return this.authService.isAuthenticated()
        }

        //Avoid memoroy leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
} 