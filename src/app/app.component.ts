import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'messenger-app';
}

//If user logs off
// or refresh token is expired set user status to offline (user.online = false)

//Change the min size of messages / the size of the message icon