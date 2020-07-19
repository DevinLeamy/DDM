import { Component, OnInit } from '@angular/core'
import { ChatService } from 'src/app/services/chat';
import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from 'src/app/services/users';
import { Subscription } from 'rxjs';
import { Chat } from "../../../models/chat"
import { trigger, state, style, animate, transition } from '@angular/animations'


@Component({
  selector: "app-global-chat",
  templateUrl: "global-chat.component.html",
  styleUrls: ["global-chat.component.css"],
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
  providers: [ChatService, UsersService]
})
export class GlobalChatComponent implements OnInit {
  chatId: string
  chatSub: Subscription
  leftExpanded: boolean = false
  rightExpanded: boolean = false
  constructor(
    private chatService: ChatService, 
    private route: ActivatedRoute, 
    private usersService: UsersService,
    private router: Router
  ) {
    //Reloads when params change 
    this.router.routeReuseStrategy.shouldReuseRoute = 
      () => false
  }

  ngOnInit() {
    //Set chatId from router link id
    this.route.params
      .subscribe(params => {
        this.chatId = params["id"]
        this.chatService.initChatService(this.chatId)
        this.chatService.getChat()
        this.chatSub = this.chatService.getChatUpdated()
          .subscribe((chat: Chat) => {
            if (this.usersService.users === null || this.usersService.users === undefined) {
              var userIds = []
              for (var i = 0; i < chat.subs.length; i++) {
                const userId = chat.subs[i]
                if (userIds.indexOf(userId) === -1 && !this.usersService.getUserSub(userId)) {
                  userIds.push(userId)
                }
              }
              for (var i = 0; i < chat.messages.length; i++) {
                const userId = chat.messages[i].senderId
                if (userIds.indexOf(userId) === -1 && !this.usersService.getUserSub(userId)) {
                  userIds.push(userId)
                }
              }
              this.usersService.getUsers(userIds)
            }
          })
      })
  }

  //Toggles the left expansion panel
  toggleLeft() {
    this.leftExpanded = !this.leftExpanded
    if (this.leftExpanded) {
      this.rightExpanded = false
    }
  }

  //Toggles the right expansion panel
  toggleRight() {
    this.rightExpanded = !this.rightExpanded
    if (this.rightExpanded) {
      this.leftExpanded = false
    }
  }

  //Toggles the middle expansion panel
  toggleMiddle() {
    this.rightExpanded = false
    this.leftExpanded = false
  }
}
