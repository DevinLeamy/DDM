import { Component } from '@angular/core';
import { ChatsService } from "./services/chats"
import { UsersService } from "./services/users"
import { ChatService } from './services/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"],
  providers: [ChatsService, UsersService]
})
export class AppComponent {
  title = 'messenger-app'
  constructor(
    private chatsService: ChatsService, 
    private usersService: UsersService, 
    private chatService: ChatService
  ) {}
  
  ngOnInit() {
    this.chatService.initServerSocket()
  }
}