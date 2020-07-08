//Service for the chat API
//Handles multiple chats
const BASE_URL = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { Location } from "@angular/common"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { Chat } from '../models/chat'

@Injectable({
  providedIn: "root"
})
export class ChatsService {
  chats: Chat[]
  chatsUpdated = new Subject<Chat[]>()
  constructor(private http: HttpClient, private location: Location) {}

  //Gets subscription to all chat Ids
  getChatsUpdated() {
    return this.chatsUpdated.asObservable()
  }

  //Gets all chats
  getChats() {
    this.http.get(BASE_URL + "chats")
      .subscribe((res : Chat[]) => {
        //This can be improved
        this.chats = [];
        for (var i = 0; i < res.length; i++) {
          this.chats.push(res[i])
        }
        this.updatechats()
      })
  }

  //Update chat ids
  updatechats() {
    this.chatsUpdated.next([...this.chats])
  }
}
