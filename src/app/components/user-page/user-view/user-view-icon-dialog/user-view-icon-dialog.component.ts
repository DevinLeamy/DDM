import { Component } from "@angular/core"
import { MatDialogRef } from '@angular/material/dialog'
import { UserService } from 'src/app/services/user'

@Component({
        selector: 'app-user-view-icon-dialog',
        templateUrl: 'user-view-icon-dialog.component.html',
        styleUrls: ["user-view-icon-dialog.component.css"]
})
export class UserViewIconDialogComponent {
        selectedImage
        selectedImageUrl
        constructor(
                public dialogRef: MatDialogRef<UserViewIconDialogComponent>, 
                private userService: UserService,
        ) {}
        
        //Closes the dialog
        onExit() {
                this.dialogRef.close();
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
                this.dialogRef.close()
        }

}