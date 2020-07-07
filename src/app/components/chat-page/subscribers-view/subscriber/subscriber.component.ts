import { Component, Input } from "@angular/core"

@Component({
        selector: "app-subscriber",
        templateUrl: "subscriber.component.html",
        styleUrls: ["subscriber.component.css"]
})
export class SubscriberComponent {
        @Input() username: string
        @Input()  online: boolean
        @Input() image: string
        @Input() adminId: string
        @Input() subId: string
        
}