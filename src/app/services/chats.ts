//Service for the chat API
//Handles multiple chats
const BASE_URL = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: "root"
})
export class ChatsService {
  chatIds: string[]
  chatIdsUpdated = new Subject<string[]>()
  constructor(private http: HttpClient) {}

  //Gets subscription to all chat Ids
  getChatIdsUpdated() {
    return this.chatIdsUpdated.asObservable()
  }

  //temp
  //Gets all chat ids
  getChatIds() {
    this.http.get(BASE_URL + "chatIds")
      .subscribe((res : string[]) => {
        this.chatIds = [];
        for (var i = 0; i < res.length; i++) {
          this.chatIds.push(res[i])
        }
        this.updateChatIds()
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
  updateChatIds() {
    this.chatIdsUpdated.next([...this.chatIds])
  }
}
