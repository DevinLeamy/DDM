import { Component, Input } from "@angular/core"
import { UserService } from 'src/app/services/user'

@Component({
        selector: "app-friend-request",
        templateUrl: "friend-request.component.html",
        styleUrls: ["friend-request.component.css"]
})
export class FriendRequestComponent {
        @Input() username: string
        @Input() image: string = "$$$Default$$$"
        @Input() userId: string

        constructor(private userService: UserService) {}

        //Accept user's friend request
        acceptRequest() {
                this.userService.acceptFriendRequest(this.userId)
        }

        //Decline user's friend request
        declineRequest() {
                this.userService.declineFriendRequest(this.userId)
        }
}