//Service for the chat API
const BASE_URL = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { Chat } from '../models/chat'
import { Message } from "../models/message"
import * as io from 'socket.io-client'

@Injectable({
  providedIn: "root"
})
export class ChatService {
  socket: SocketIOClient.Socket
  chat: Chat
  chatUpdated = new Subject<Chat>()
  chatId: string
  chatIds: string[]
  chatIdsUpdated = new Subject<string[]>()
  constructor(private http: HttpClient) {}

  //Get subscription to chat object
  getChatUpdated() {
    return this.chatUpdated.asObservable()
  }

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

  initChatService(chatId: string) {
    this.setChatId(chatId)
    console.log("Chat Service Initialized")
    this.initServerSocket()
    this.socket = io.connect("http://localhost:3000", )
    this.initClientSocket()
  }
  //Sets the chat id
  setChatId(chatId: string) {
    this.chatId = chatId
  }

  //For testing
  getChat() {
    console.log(this.chatId)
    this.http.get(BASE_URL + "data/" + this.chatId)
      .subscribe((res: Chat) => {
        this.chat = res
        this.updateChat()
      })
  }

  initServerSocket() {
    this.http.get(BASE_URL + "init")
      .subscribe(res => {
        console.log(res)
      })
  }

  initClientSocket() {
    const _this = this
    this.socket.on("message-posted-to-chat-" + this.chatId, function(message: Message) {
      _this.chat.messages.push(message)
      _this.updateChat()
    })
  }

  //Request message post to database
  postMessage(message: string, senderId: string) {
    this.socket.emit("message-posted-to-server", {
      text: message,
      senderId: senderId,
      chatId: this.chatId
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

  //Update chat object
  updateChat() {
    this.chatUpdated.next({...this.chat})
  }

  //Update chat ids
  updateChatIds() {
    this.chatIdsUpdated.next([...this.chatIds])
  }
}
