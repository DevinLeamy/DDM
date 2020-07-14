import { Component } from "@angular/core"
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
        selector: 'app-chat-subscribe-admin-dialog',
        templateUrl: 'chat-subscribe-admin-dialog.component.html',
        styleUrls: ["chat-subscribe-admin-dialog.component.css"]
})
export class ChatSubscribeAdminDialogComponent {

        constructor(public dialogRef: MatDialogRef<ChatSubscribeAdminDialogComponent>) {}
        
        onExit() {
                this.dialogRef.close();
        }
}