import { Component, Inject } from "@angular/core"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
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

        //Triggers when admin selects image for chat
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
                this.chatService.setChatId(this.data.chatId)
                this.chatService.setChatImage(this.selectedImage)
                this.dialogRef.close()
        }
}