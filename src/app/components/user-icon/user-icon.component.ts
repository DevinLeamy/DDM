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

/*
Next step:
Plan bundel image fab and user-icon into one icon
use the user api to get user data and then display data accordingly
treat component as user service

What this will allow for:
User sub will not have to include any information apart from the user id for quering

The result:
Less data on the client => more scalable and faster

*/