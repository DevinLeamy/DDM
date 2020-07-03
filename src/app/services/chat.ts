//Service for the chat API
//Handles a single chat
const CHAT_API = "http://localhost:3000/api/chat/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject, Subscriber, fromEventPattern } from 'rxjs'
import { User } from "../models/user" 
import { Chat } from '../models/chat'
import { Message } from "../models/message"
import * as io from 'socket.io-client'
import { UserSub } from '../models/user-sub'
import { ChatSub } from '../models/chat-sub'

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

  //Returns chat sub
  getChatSub() : ChatSub {
    return {_id: this.chat._id, title: this.chat.title, image: this.chat.image}
  }

  //Updates chat
  getChat(query=false) {
    if (query || this.chat == undefined || this.chat == null) {
      this.http.get(CHAT_API + "data/" + this.chatId)
      .subscribe((res: Chat) => {
        this.chat = res
        this.updateChat()
      })
    } else {
      this.updateChat()
    }
  }

  //Creates link between the socket on the client and the socket on the server
  initServerSocket() {
    this.http.get(CHAT_API + "init")
      .subscribe(res => {
        console.log(res)
      })
  }

  //Declares function of client socket
  initClientSocket() {
    const _this = this
    this.socket.on("message-posted-to-chat-" + this.chatId, function(message: Message) {
      _this.chat.messages.push(message)
      _this.updateChat()
    })
  }

  //Request message post to database
  postMessage(message: string, senderId: string, senderUsername: string, timestamp: number) {
    this.socket.emit("message-posted-to-server", {
      text: message,
      senderId: senderId,
      senderUsername: senderUsername,
      chatId: this.chatId,
      timestamp: timestamp
    })
  }

  // Requests a subscription to a given chat
  subscribeToChat() {
    return new Promise( (resolve, reject) => {
      if (this.chatId == undefined || this.chatId == null) reject("Bad Data")
      const body = {
        chat: {
          _id: this.chat._id,
          title: this.chat.title
        }
      }
      var headers = new HttpHeaders()
      headers = headers.append('Content-type', 'application/json')
      this.http.post(CHAT_API + "subscribe/", body, { headers: headers })
        .subscribe((res: UserSub) => {
          //Get user and not just user id
          if (res == undefined || res == null) reject("Subscription was unsuccessful")
          this.chat.subs.push(res)
          this.updateChat()
          resolve(0)
        })
    })
  }

  // Requests a unsubscription to a given chat
  unsubscribeFromChat() {
    return new Promise( (resolve, reject) => {
      if (this.chatId == undefined || this.chatId == null) reject("Bad Data")
      const body = {
        chat: {
          _id: this.chat._id,
          title: this.chat.title
        }
      }
      var headers = new HttpHeaders()
      headers = headers.append('Content-type', 'application/json')
      this.http.post(CHAT_API + "unsubscribe/", body, { headers: headers })
        .subscribe((res: {status: string, data: UserSub}) => {
          //Get user and not just user id
          if (res == undefined || res == null) reject("Subscription was unsuccessful")
          const index = this.chat.subs.indexOf(res.data)
          console.log(res.data, index, this.chat.subs)
          if (index === -1) {
            this.chat.subs = this.chat.subs.splice(index, 1)
          }
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
