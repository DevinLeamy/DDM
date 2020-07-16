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
                reader.readAsDataURL(this.selectedImage)
                reader.onload = () => {
                        const originalDataUrl = reader.result
                        //Scaled the image down to a 400 X 400 square
                        this.scaleImage(originalDataUrl, 400, 400, this.selectedImage.type, 0.7, (dataUrl) => {
                                this.selectedImageUrl = dataUrl
                        })
                }
        }

        //https://codepen.io/shrinivas93/pen/xdLLPN
        scaleImage(dataUrl, newWidth: number, newHeight: number, imageType: string, imageArguments: number, callback) {
                imageType = imageType || "image/jpeg";
                imageArguments = imageArguments || 0.7;
                const image = new Image();
                image.onload = function() {
                  const canvas = document.createElement("canvas");
                  canvas.width = newWidth;
                  canvas.height = newHeight;
                  const ctx = canvas.getContext("2d");
                  ctx.drawImage(image, 0, 0, newWidth, newHeight);
                  const newDataUrl = canvas.toDataURL(imageType, imageArguments);
                  callback(newDataUrl);
                }
                image.src = dataUrl;
        }

        //Uploads image
        uploadImage() {
                if (this.selectedImageUrl === undefined || this.selectedImageUrl === null) return
                this.userService.setProfileImage(this.selectedImageUrl)
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