//Service for the chat API
//Handles a single chat
const BASE_URL = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject, Subscriber, fromEventPattern } from 'rxjs'
import { Chat } from '../models/chat'
import { Message } from "../models/message"
import * as io from 'socket.io-client'
import { Sub } from "../models/sub"

@Injectable({
  providedIn: "root"
})
export class ChatService {
  socket: SocketIOClient.Socket
  chat: Chat
  chatUpdated = new Subject<Chat>()
  chatId: string
  constructor(private http: HttpClient) {}

  //Get subscription to chat object
  getChatUpdated() {
    return this.chatUpdated.asObservable()
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

  //Returns chat id
  getChatId() {
    return this.chatId
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
  postMessage(message: string, senderId: string, senderUsername: string) {
    this.socket.emit("message-posted-to-server", {
      text: message,
      senderId: senderId,
      senderUsername: senderUsername,
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

  // Requests a subscription to a given chat
  subscribeToChat() {
    return new Promise( (resolve, reject) => {
      if (this.chatId == undefined || this.chatId == null) reject("Bad Data")
      this.http.get(BASE_URL + "subscribe/" + this.chatId)
      .subscribe((res: Sub) => {
        if (res == undefined || res == null) reject("Subscription was unsuccessful")
        console.log("User subscribed to chat")
        this.chat.subIds.push({ _id: res._id })
        this.updateChat()
        resolve(0)
      })
    })
  }

  //Update chat object
  updateChat() {
    this.chatUpdated.next({...this.chat})
  }
}
