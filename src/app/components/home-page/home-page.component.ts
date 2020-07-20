import { Component, OnInit, OnDestroy } from '@angular/core'
import { ChatsService } from 'src/app/services/chats'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { Subscription } from "rxjs"
import { MediaObserver } from "@angular/flex-layout"
import { ChatService } from 'src/app/services/chat'

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
  providers: [ChatService]
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private chatsService: ChatsService, public media: MediaObserver, private chatService: ChatService) {}
  leftExpanded: boolean = false
  rightExpanded: boolean = false
  popChatIdsSub: Subscription
  ngOnInit() {
        this.popChatIdsSub = this.chatsService.getPopularChatIdsUpdated()
                .subscribe(popularChatsIds => {
                        this.chatsService.setSelectedChatId(popularChatsIds[0])
                        this.popChatIdsSub.unsubscribe()
                })
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

  ngOnDestroy() {
        this.popChatIdsSub.unsubscribe()
  }
}
