import { Component } from '@angular/core';
import { ChatsService } from "./services/chats"
import { UsersService } from "./services/users"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
  providers: [ChatsService, UsersService]
})
export class AppComponent {
  title = 'messenger-app'
  constructor(private chatsService: ChatsService, private usersService: UsersService) {}
}