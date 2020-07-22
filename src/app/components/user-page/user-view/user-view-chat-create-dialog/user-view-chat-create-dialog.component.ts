import { Component, OnInit, OnDestroy } from "@angular/core"
import { NgForm } from '@angular/forms'
import { UserService } from "../../../../services/user"
import { User } from "../../../../models/user"
import { Subscription } from 'rxjs'
import { AuthenticationService } from 'src/app/services/authentication'
import { ChatCreateService } from 'src/app/services/chat-create'
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
        selector: "app-user-view-chat-create-dialog",
        templateUrl: "user-view-chat-create-dialog.component.html",
        styleUrls: ["user-view-chat-create-dialog.component.css"]
})
export class UserViewChatCreateDialogComponent implements OnInit, OnDestroy {
        categories: String[] = [
                "Science and Tech",
                "Entertainment",
                "Esports",
                "Sports",
                "Other"
        ]
        user: User;
        userSub: Subscription
        constructor(
                private chatCreateService: ChatCreateService, 
                private userService: UserService, 
                private authService: AuthenticationService,
                public dialogRef: MatDialogRef<UserViewChatCreateDialogComponent>
        ) {}

        onExit() {
                this.dialogRef.close()
        }
        
        ngOnInit() {
                this.chatCreateService.initNewChat()
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                        })
                this.userService.getUser()
        }
        
        isAuthenticated() {
                return this.authService.isAuthenticated()
        }
        
        //Creates a chat if the users input is valid
        createChat(chatForm: NgForm) {
                const title = chatForm.value.title
                const category = chatForm.value.category
                if (!chatForm.invalid && category !== undefined && category !== null && category !== "") {
                        this.chatCreateService.postChat(title, this.user._id, category, true)
                        chatForm.resetForm()
                }
        }
        
        //Avoid memory leaks
        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}