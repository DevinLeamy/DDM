import { Component } from '@angular/core'
import { ChatsService } from 'src/app/services/chats'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: "app-home-page",
  animations: [
          trigger("expansionPanel", [
                  state("open", style({
                          visibility: "visible",
                          width: "calc(100% - 64px)"
                  })),
                  state("closed", style({
                          width: "0%",
                          visibility: "hidden"
                  })),
                  transition("open => closed", [
                          animate("0.2s")
                  ]),
                  transition("closed => open", [
                          animate("0.2s")
                  ])
          ]),
          trigger("expansionTitle", [
                  state("visible", style({
                          width: "30px",
                          lineHeight: "30px",
                          marginRight: "1px",
                          marginLeft: "1px",
                          visibility: "visible"
                  })),
                  state("invisible", style({
                          width: "0px",
                          visibility: "hidden"
                  }))
            ])
  ],
  templateUrl: "home-page.component.html",
  styleUrls: ["home-page.component.css"],
  providers: [ChatsService]
})
export class HomePageComponent {
  constructor(private chatsService: ChatsService) {}
  leftExpanded: boolean = false
  rightExpanded: boolean = false
  ngOnInit() {
    if (this.chatsService.selectedChatId === undefined || this.chatsService.selectedChatId === null) {
      this.chatsService.selectedChatId = "--"
    }
    if (this.chatsService.chats !== undefined && this.chatsService !== null) return
    this.chatsService.getPopularChatIds()
          .then((popChatIds: string[]) => this.chatsService.getRecentChatIds()
                  .then((recChatIds: string[]) => this.chatsService.getRecommendedChatIds()
                          .then((recomChatIds: string[]) => {
                                  var chatIds: string[] = []
                                  for (var i = 0; i < popChatIds.length; i++) {
                                          const chatId = popChatIds[i]
                                          if (chatIds.indexOf(chatId) === -1) {
                                                  chatIds.push(chatId)
                                          }
                                  }
                                  for (var i = 0; i < recChatIds.length; i++) {
                                          const chatId = recChatIds[i]
                                          if (chatIds.indexOf(chatId) === -1) {
                                                  chatIds.push(chatId)
                                          }
                                  }
                                  for (var i = 0; i < recomChatIds.length; i++) {
                                          const chatId = recomChatIds[i]
                                          if (chatIds.indexOf(chatId) === -1) {
                                                  chatIds.push(chatId)
                                          }
                                  }
                                  if (this.chatsService.selectedChatId === "--") {
                                          this.chatsService.setSelectedChatId(chatIds[0])
                                  }
                                  this.chatsService.getChats(chatIds)
                          })
                  )
          )
  }

  //Toggle left expansion panel
  toggleLeft() {
    this.leftExpanded = !this.leftExpanded
    if (this.leftExpanded) {
      this.rightExpanded = false
    }
  }

  //Toggle right expansion panel
  toggleRight() {
    this.rightExpanded = !this.rightExpanded
    if (this.rightExpanded) {
      this.leftExpanded = false
    }
  }

  //Toggle middle expansion panel 
  toggleMiddle() {
    this.rightExpanded = false
    this.leftExpanded = false
  }
}
