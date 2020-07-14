import { Component } from '@angular/core'
import { ChatsService } from 'src/app/services/chats';

@Component({
  selector: "app-home-page",
  templateUrl: "home-page.component.html",
  styleUrls: ["home-page.component.css"],
  providers: [ChatsService]
})
export class HomePageComponent {
  constructor(private chatsService: ChatsService) {}

  ngOnInit() {
    var chatIds = []
    if (this.chatsService.chats !== undefined) return
    this.chatsService.getPopularChatIds()
      .then( (resolve: string[]) => {
        for (var i = 0; i < resolve.length; i++) {
          const chatId = resolve[i]
          if (chatIds.indexOf(chatId) === -1) {
            chatIds.push(chatId)
          }
        }
        this.chatsService.getRecentChatIds()
          .then( (resolve: string[]) => {
            for (var i = 0; i < resolve.length; i++) {
              const chatId = resolve[i]
              if (chatIds.indexOf(chatId) === -1) {
                chatIds.push(chatId)
              }
            }
            this.chatsService.getRecommendedChatIds()
            .then( (resolve: string[]) => {
              for (var i = 0; i < resolve.length; i++) {
                const chatId = resolve[i]
                if (chatIds.indexOf(chatId) === -1) {
                  chatIds.push(chatId)
                }
              }
              this.chatsService.getChats(chatIds)
          })
      }) 
    })
  }

}
