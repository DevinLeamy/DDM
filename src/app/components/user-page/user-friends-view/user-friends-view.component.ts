import { Component, OnInit, OnDestroy} from "@angular/core"
import { Subscription } from "rxjs"
import { UserService } from "../../../services/user"
import { User } from "../../../models/user"
import { UsersService } from 'src/app/services/users'

@Component({
        selector: "app-user-friends-view",
        templateUrl: "user-friends-view.component.html",
        styleUrls: ["user-friends-view.component.css"]
})
export class UserFriendsViewComponent implements OnInit, OnDestroy {
        user: User
        userSub: Subscription
        constructor(private userService: UserService, private usersService: UsersService) {}
        
        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                        })
                this.userService.getUser()
        }

        getUserSub(subId: string) {
                if (this.usersService.getUserSub(subId)) {
                        return this.usersService.getUserSub(subId)
                }
                return {
                        _id: "-----",
                        username: "loading...",
                        image: "$$$Default$$$",
                        online: false
                }
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }


}