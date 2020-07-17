//Service for the chat API
//Handles multiple chats
const BASE_URL = "https://rumble-thread-based-messenger.herokuapp.com/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { ChatSub } from '../models/chat-sub'

@Injectable({
  providedIn: "root"
})
export class ChatsService {
  chats: ChatSub[]
  chatsUpdated = new Subject<ChatSub[]>()
  selectedChatId: string
  selectedChatIdUpdated = new Subject<string>()

  constructor(private http: HttpClient) {}

  //Gets subscription to all chat subs
  getChatsUpdated() {
    return this.chatsUpdated.asObservable()
  }

  //Get selected chat updated
  getSelectedChatIdUpdated() {
    return this.selectedChatIdUpdated.asObservable()
  }

  //Gets chatsub from list of chatsubs that have already been gotten
  getChatSub(chatId: string) {
    if (this.chats === undefined || this.chats === null) return
    for (var i = 0; i < this.chats.length; i++) {
      if (this.chats[i]._id === chatId) {
        return this.chats[i]
      }
    }
  }

  //Creates list of chat subs from a list of chatIds
  getChats(chatIds: string[]) {
    console.log("Getting chats", chatIds)
    this.chats = []
    for (var i = 0; i < chatIds.length; i++) {
      const chatId = chatIds[i]
      //Get chat
      this.getChat(chatId) 
        .then( (chatSub: ChatSub) => {
          this.chats.push(chatSub)
          this.updateChats()
        })
    }
  }

  //Promise that resolves a chatSub
  getChat(chatId: string) {
    return new Promise((resolve, reject) => {
      if (chatId === undefined || chatId === null) {
        reject("Bad data")
        return
      }
      //Send get request for chat sub
      const body = {
        _id: chatId
      }
      var headers = new HttpHeaders()
      headers = headers.append('Content-type', 'application/json')
      this.http.post(BASE_URL + "chatSub", body, { headers: headers })
        .subscribe( (chatSub: ChatSub) => {
          resolve(chatSub)
        })
    })
  }

  //Get most recent 10 chats ids
  getRecentChatIds() {
    return new Promise((resolve) => {
      this.http.get(BASE_URL + "chatIds/recent")
        .subscribe((res: {status: string, data: string[]}) => {
          const chatIds: string[] = res.data
          resolve(chatIds)
        })
    })
  }
  
  //Get 10 most popular chats
  getPopularChatIds() {
    return new Promise((resolve) => {
      this.http.get(BASE_URL + "chatIds/popular")
        .subscribe((res: {status: string, data: string[]}) => {
          const chatIds: string[] = res.data
          resolve(chatIds)
        })
    })
  }

  //Get 10 recommeded chats
  getRecommendedChatIds() {
    return new Promise((resolve) => {
      this.http.get(BASE_URL + "chatIds/recommended")
        .subscribe((res: {status: string, data: string[]}) => {
          const chatIds: string[] = res.data
          resolve(chatIds)
        })
    })
  }

  //Get up to 10 related chats
  getRelatedChatIds(chatTags: string[], chatCategory: string, chatId: string) {
    return new Promise((resolve) => {
      const body = {
        tags: chatTags,
        category: chatCategory,
        chatId: chatId
      }
      var headers = new HttpHeaders()
      headers = headers.append('Content-type', 'application/json')
      this.http.post(BASE_URL + "chatIds/related", body, { headers: headers })
        .subscribe((res: {status: string, data: any}) => {
          if (res.status === '0') {
            resolve(res.data)
          }
        })
    }) 
  }

  //Select chat
  setSelectedChatId(chatId: string) {
    this.selectedChatId = chatId
    this.updateSelectedChatId()
  }

  //Update chat 
  updateChats() {
    this.chatsUpdated.next([...this.chats])
  }

  //Update selected chat id
  updateSelectedChatId() {
    if (this.selectedChatId === undefined || this.selectedChatId === null) return
    this.selectedChatIdUpdated.next(this.selectedChatId)
  }
}
