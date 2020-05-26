//Service for the chat API
//Handles multiple chats
const BASE_URL = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { Chat } from '../models/chat'

@Injectable({
  providedIn: "root"
})
export class ChatsService {
  chats: Chat[]
  chatsUpdated = new Subject<Chat[]>()
  constructor(private http: HttpClient) {}

  //Gets subscription to all chat Ids
  getChatsUpdated() {
    return this.chatsUpdated.asObservable()
  }

  //temp
  //Gets all chat ids
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

  //Create new chat
  postChat(title: string) {
    const body = {
      title: title
    }
    var headers = new HttpHeaders()
    headers = headers.append('Content-type', 'application/json')
    this.http.post(BASE_URL + "chat-create/create", body, { headers: headers })
      .subscribe(res => console.log(res))
  }

  //Update chat ids
  updatechats() {
    this.chatsUpdated.next([...this.chats])
  }
}
