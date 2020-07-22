import { Component, OnInit, OnDestroy } from "@angular/core"
import { NgForm } from "@angular/forms"
import { UserService } from "../../../services/user"
import { User } from 'src/app/models/user'
import { Subscription } from 'rxjs'
import { DomSanitizer } from "@angular/platform-browser"
import { MatDialog } from "@angular/material/dialog"
import { UserViewIconDialogComponent } from './user-view-icon-dialog/user-view-icon-dialog.component'
import { UserViewChatCreateDialogComponent } from './user-view-chat-create-dialog/user-view-chat-create-dialog.component'

@Component({
        selector: "app-user-view",
        templateUrl: "user-view.component.html",
        styleUrls: ["user-view.component.css"]
})
export class UserViewComponent implements OnInit, OnDestroy {
        user: User
        userSub: Subscription
        sendingFriendRequest: boolean = false
        constructor(
                private userService: UserService, 
                public DomSanitationService: DomSanitizer,
                private dialog: MatDialog
        ) {}
        
        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                        })
                this.userService.getUser()
        }
        
        //Sends a friend request
        sendFriendReq(requestForm: NgForm) {
                const email = requestForm.value.email.trim()
                if (email == "" || email == "null" || email == undefined || this.sendingFriendRequest) return
                this.sendingFriendRequest = true
                this.userService.sendFriendRequestToEmail(email)
                        .then( resolve => {
                                alert(resolve)
                                this.sendingFriendRequest = false
                                requestForm.resetForm()
                        })
                        .catch( reject => {
                                alert(reject)
                                this.sendingFriendRequest = false
                                requestForm.resetForm()
                        })
        }

        //Opens the image icon select dialog
        openIconDialog() {
                const dialogRef = this.dialog.open(UserViewIconDialogComponent, {
                        width: "350px",
                        height: "350px"
                })
                dialogRef.afterClosed()
                        .subscribe(() => {
                                //Gets the new user icon image from the database
                                this.userService.getUser(true)
                        })
        }

        //Opens the chat create dialog
        openChatCreateDialog() {
                this.dialog.open(UserViewChatCreateDialogComponent, {
                        width: "350px",
                        height: "550px"
                })
                
        }

        //Logs out the user
        logOut() {
                
                this.userService.logOut()
        }

        //Avoid memory leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}