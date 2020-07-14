import { Component, Input } from "@angular/core"

@Component({
        selector: "app-subscriber",
        templateUrl: "subscriber.component.html",
        styleUrls: ["subscriber.component.css"]
})
export class SubscriberComponent {
        @Input() username: string = "loading..."
        @Input() online: boolean = false
        @Input() image: string = "$$$Default$$$"
        @Input() adminId: string = "--admin--"
        @Input() subId: string = "--user--"
}