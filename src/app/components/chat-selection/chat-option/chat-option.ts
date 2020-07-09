import { Component, Input } from "@angular/core"
import { ChatsService } from 'src/app/services/chats'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
        selector: "app-chat-option",
        animations: [
                trigger('expansionBox', [
                        state('open', style({
                                backgroundColor: "rgb(30, 40, 50)",
                                height: "90px",
                                borderRadius: "5px",
                                width: "100%"
                        })),
                        state('closed', style({
                                // backgroundColor: "rgb(38, 49, 54)",
                                height: "40px",
                                borderRadius: "5px",
                                width: "100%"
                        })),
                                transition('open => closed', [
                                        animate('0.2s')
                        ]),
                                transition('closed => open', [
                                        animate('0.2s')
                        ]),
                ]),
        ],
        templateUrl: "chat-option.html",
        styleUrls: ["chat-option.css"]
})
export class ChatOptionComponent {
        @Input() chatId: string
        expanded = false;

        toggle() {
          this.expanded = !this.expanded;
        }

        constructor(private chatsService: ChatsService) {}

        //Get chat sub
        getChatSub() {
                if (this.chatsService.getChatSub(this.chatId)) {
                        return this.chatsService.getChatSub(this.chatId)
                }
                return {
                        _id: "-----",
                        title: "loading...",
                        image: "$$$Default$$$",
                        tags: [],
                        subCount: 0
                }
        }

        //Change expand
}