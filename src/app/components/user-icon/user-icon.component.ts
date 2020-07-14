import { Component, Input } from "@angular/core"

@Component({
        selector: "app-user-icon",
        templateUrl: "user-icon.component.html",
        styleUrls: ["user-icon.component.css"]
})
export class UserIconComponent {
        @Input("showStatus") showStatus: boolean
        @Input("online") online: boolean
}