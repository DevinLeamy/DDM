import { Component, OnInit, OnDestroy } from "@angular/core"
import { NgForm } from "@angular/forms"
import { UserService } from "../../../services/user"
import { User } from 'src/app/models/user'
import { Subscription } from 'rxjs'
import { DomSanitizer } from "@angular/platform-browser"

@Component({
        selector: "app-user-view",
        templateUrl: "user-view.component.html",
        styleUrls: ["user-view.component.css"]
})
export class UserViewComponent {
        user: User
        userSub: Subscription
        selectedImageUrl
        selectedImage

        constructor(private userService: UserService, public DomSanitationService: DomSanitizer) {}
        
        ngOnInit() {
                this.userSub = this.userService.getUserUpdated()
                        .subscribe(user => {
                                this.user = user
                        })
                this.userService.getUser()
        }

        //Sets the selected image to the image selected by the user
        onImageSelected(event) {
                this.selectedImage = event.target.files[0]
                const reader = new FileReader()
                reader.onload = () => {
                        this.selectedImageUrl = reader.result
                }
                reader.readAsDataURL(this.selectedImage)
        }

        //Uploads image
        uploadImage() {
                if (this.selectedImage === undefined || this.selectedImage === null) { return }
                this.userService.setProfileImage(this.selectedImage)
        }

        //Sends a friend request
        sendFriendReq(requestForm: NgForm) {
                const email = requestForm.value.email.trim()
                if (email == "" || email == "null" || email == undefined) { return }
                this.userService.sendFriendRequestToEmail(email)
        }

        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}