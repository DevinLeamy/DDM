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
        selectedImage: File
        constructor(private userService: UserService) {}
        
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
        }

        //Uploads image
        uploadImage() {
                //If no image has been selected
                if (this.selectedImage === undefined || this.selectedImage === null) { return }
                console.log(this.selectedImage)
        }

        ngOnDestroy() {
                this.userSub.unsubscribe()
        }
}