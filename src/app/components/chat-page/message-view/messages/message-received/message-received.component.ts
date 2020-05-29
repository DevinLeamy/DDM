import { Component, Input } from '@angular/core'

@Component({
  selector: "app-message-received",
  templateUrl: "message-received.component.html",
  styleUrls: ["message-received.component.css"]
})
export class MessageReceivedComponent {
  @Input() senderUsername: string
}
