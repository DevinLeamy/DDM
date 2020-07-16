import { Component, Inject } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ChatService } from 'src/app/services/chat'
import { DialogData } from "./dialog-data"

@Component({
        selector: 'app-chat-subscribe-admin-dialog',
        templateUrl: 'chat-subscribe-admin-dialog.component.html',
        styleUrls: ["chat-subscribe-admin-dialog.component.css"]
})
export class ChatSubscribeAdminDialogComponent {
        selectedImage
        selectedImageUrl
        constructor(
                public dialogRef: MatDialogRef<ChatSubscribeAdminDialogComponent>, 
                private chatService: ChatService,
                @Inject(MAT_DIALOG_DATA) public data: DialogData
        ) {}
        
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
                this.chatService.setChatId(this.data.chatId)
                this.chatService.setChatImage(this.selectedImageUrl)
                this.dialogRef.close()
        }

}