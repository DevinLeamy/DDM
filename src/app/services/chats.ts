//Service for the chat API
//Handles multiple chats
const BASE_URL = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { ChatSub } from '../models/chat-sub'

@Injectable({
  providedIn: "root"
})
export class ChatsService {
  chats: ChatSub[] = []
  chatIds: string[] = []
  chatsUpdated = new Subject<ChatSub[]>()
  popChatIds: string[] = []
  recChatIds: string[] = []
  recomChatIds: string[] = []
  popChatIdsUpdated = new Subject<string[]>()
  recChatIdsUpdated = new Subject<string[]>()
  recomChatIdsUpdated = new Subject<string[]>()
  chatTitles: string[] = []
  chatTags: string[] = []
  chatTitlesUpdated = new Subject<string[]>()
  chatTagsUpdated = new Subject<string[]>()
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

  //Get observable for recent chat Ids
  getRecentChatIdsUpdated() {
    return this.recChatIdsUpdated.asObservable()
  }

  //Get observable for popular chat Ids
  getPopularChatIdsUpdated() {
    return this.popChatIdsUpdated.asObservable()
  }

  //Get observable for recent chat Ids
  getRecommendedChatIdsUpdated() {
    return this.recomChatIdsUpdated.asObservable()
  }

  //Gets observable for all tags in use
  getTagsUpdated() {
    return this.chatTagsUpdated.asObservable()
  }

  //Gets observable for all chat titles in use
  getChatTitlesUpdated() {
    return this.chatTitlesUpdated.asObservable()
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

  //Checks if service has already searched for a given chat
  containsChatSub(chatId: string) {
    for (var i = 0; i < this.chatIds.length; i++) {
      if (this.chatIds[i] === chatId) return true
    }
    return false
  }

  //Creates list of chat subs from a list of chatIds
  getChats(chatIds: string[]) {
    if (chatIds.length === 0) return
    console.log("Getting chats", chatIds)
    for (var i = 0; i < chatIds.length; i++) {
      const chatId = chatIds[i]
      if (this.containsChatSub(chatId)) continue 
      this.chatIds.push(chatId)
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
    if (this.recChatIds.length === 0) {
      this.http.get(BASE_URL + "chatIds/recent")
      .subscribe((res: {status: string, data: string[]}) => {
        this.recChatIds = res.data
        this.updateRecentChatIds()
      })
    } else {
      this.updateRecentChatIds()
    }
  }
  
  //Get 10 most popular chats
  getPopularChatIds() {
    if (this.popChatIds.length === 0) {
      this.http.get(BASE_URL + "chatIds/popular")
        .subscribe((res: {status: string, data: string[]}) => {
          this.popChatIds = res.data
          this.updatePopularChatIds()
        })
    } else {
      this.updatePopularChatIds()
    }
  }

  //Get 10 recommeded chats
  getRecommendedChatIds() {
    if (this.recomChatIds.length === 0) {
      this.http.get(BASE_URL + "chatIds/recommended")
        .subscribe((res: {status: string, data: string[]}) => {
          this.recomChatIds = res.data
          this.updateRecommendedChatIds()
        })
    } else {
      this.updateRecommendedChatIds()
    }
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

  //Get all tags in use
  getAllTags() {
     if (this.chatTags.length === 0) {
      this.http.get(BASE_URL + "allTags")
        .subscribe((res: {status: string, data: any}) => {
          if (res.status === '0') {
            this.chatTags = res.data
            this.updateChatTags()
          } 
        })
    } else {
      this.updateChatTags()
    }
  }

  //Get all chat titles in use
  getAllChatTitles() {
    if (this.chatTitles.length === 0) {
      this.http.get(BASE_URL + "allChatTitles")
      .subscribe((res: {status: string, data: any}) => {
        if (res.status === '0') {
          this.chatTitles = res.data
          this.updateChatTitles()
        } 
      })
    } else {
      this.updateChatTitles()
    }
  }

  //Search chats based on title prefix, category and tags
  searchChats(category: string, title: string, tags: string[]) {
    return new Promise((resolve, reject) => {
      const body = {
        category: category,
        title: title,
        tags: tags
      }
      var headers = new HttpHeaders()
      headers.append('Content-type', 'application/json')
      this.http.post(BASE_URL + "searchChats", body, { headers: headers })
        .subscribe((res: {status: string, data: any}) => {
          if (res.status === "0") {
            resolve(res.data)
          } else {
            reject(res.data)
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

  //Updated recent chat ids
  updateRecentChatIds() {
    this.recChatIdsUpdated.next([...this.recChatIds])
  }

  //Updated recent chat ids
  updatePopularChatIds() {
    this.popChatIdsUpdated.next([...this.popChatIds])
  }

  //Updated recent chat ids
  updateRecommendedChatIds() {
    this.recomChatIdsUpdated.next([...this.recomChatIds])
  }

  //Update chat tags
  updateChatTags() {
    this.chatTagsUpdated.next([...this.chatTags])
  }

  //Updates chat titles
  updateChatTitles() {
    this.chatTitlesUpdated.next([...this.chatTitles])
  }
}
