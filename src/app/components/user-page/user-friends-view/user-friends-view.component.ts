import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from "@angular/core"
import { Subscription } from "rxjs"
import { UserService } from "../../../services/user"
import { User } from "../../../models/user"
import { NgForm } from '@angular/forms'

@Component({
        selector: "app-user-friends-view",
        templateUrl: "user-friends-view.component.html",
        styleUrls: ["user-friends-view.component.css"]
})
export class UserFriendsViewComponent {
        @ViewChild("friendRequestButton") friendReqBtn: ElementRef
        btnSelected: Boolean = false
        friendReqBtnText: String = "+"
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

        onFriendReqBtnClick() {
                this.btnSelected = !this.btnSelected
                if (this.btnSelected) { this.friendReqBtnText = "-" } 
                else { this.friendReqBtnText = "+" }
        }

        sendFriendReq(requestForm: NgForm) {
                const email = requestForm.value.email.trim()
                if (email == "" || email == "null" || email == undefined) { return }
                this.userService.sendFriendRequestToEmail(email)
        }

        friendReqBtnSelected() {
                return this.btnSelected
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }


}