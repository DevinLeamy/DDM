import { Component, OnInit, OnDestroy } from "@angular/core"
import { UserService } from "../../../services/user"
import { User } from 'src/app/models/user'
import { Subscription } from 'rxjs'

@Component({
        selector: "app-user-view",
        templateUrl: "user-view.component.html",
        styleUrls: ["user-view.component.css"]
})
export class UserViewComponent {
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


        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}