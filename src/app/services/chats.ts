//Service for the chat API
//Handles multiple chats
const BASE_URL = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { Chat } from '../models/chat'
import { Category } from '../models/category'
import { UserSub } from '../models/user-sub'
import { thistle } from 'color-name'

@Injectable({
  providedIn: "root"
})
export class ChatsService {
  chats: Chat[]
  chatsUpdated = new Subject<Chat[]>()
  newChat: Chat
  newChatUpdated = new Subject<Chat>()
  constructor(private http: HttpClient) {}

  //Gets subscription to all chat Ids
  getChatsUpdated() {
    return this.chatsUpdated.asObservable()
  }

  getNewChatUpdated() {
    return this.newChatUpdated.asObservable()
  }

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

  //Initializes new chat
  initNewChat() {
    this.newChat = {
      _id: undefined,
      tags: [],
      title: undefined,
      messages: [],
      category: undefined,
      admin: undefined,
      subs: [],
      global: undefined,
      image: "$$$Default$$$"
    }
  }

  //Adds a tag to the new chat
  addTag(newTag: string) {
    if (this.newChat === undefined || this.newChat === null) return 
    else if (this.newChat.tags.indexOf(newTag) == -1 && this.newChat.tags.length < 10) {
      this.newChat.tags.push(newTag)
      this.updateNewChat()
    }
  }

  //Removes a tag from the new chats list of tags
  removeTag(tagToRemove: string) {
    if (this.newChat === undefined || this.newChat === null) return 
    const indexOfTag = this.newChat.tags.indexOf(tagToRemove)
    if (indexOfTag >= 0) {
      this.newChat.tags.splice(indexOfTag, 1)
      this.updateNewChat()
    }
  }

  //Sets title of the new chat
  setTitle(newChatTitle: string) {
    if (this.newChat === undefined || this.newChat === null) return 
    this.newChat.title = newChatTitle
    this.updateNewChat()
  }

  //Create new chat
  postChat(title: string, adminId: string, category: Category, global: boolean) {
    const body = {
      title: title,
      adminId: adminId,
      category: category,
      tags: this.newChat.tags,
      global: global
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

  //Update new chat
  updateNewChat() {
    if (this.newChat === undefined || this.newChat === null) return 
    this.newChatUpdated.next({...this.newChat})
  }
}
