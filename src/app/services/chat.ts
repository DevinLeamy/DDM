//Service for the chat API
//Handles a single chat
const CHAT_API = "http://localhost:3000/api/chat/"
const USER_API = "http://localhost:3000/api/user/"
import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject, Subscriber, fromEventPattern } from 'rxjs'
import { User } from "../models/user" 
import { Chat } from '../models/chat'
import { Message } from "../models/message"
import * as io from 'socket.io-client'
import { RawUser } from "../models/raw-user"

@Injectable({
  providedIn: "root"
})
export class ChatService {
  socket: SocketIOClient.Socket
  chat: Chat
  chatUpdated = new Subject<Chat>()
  chatId: string
  users: User[] = []
  usersUpdated = new Subject<User[]>()
  constructor(private http: HttpClient) {}

  //Get subscription to chat object
  getChatUpdated() {
    return this.chatUpdated.asObservable()
  }

  //Get subscription to users object
  getUsersUpdated() {
    return this.usersUpdated.asObservable()
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


  //Returns promise that returns the user with the given userId's username
  //Must call get users before calling get user username
  //Also, user must be subscribed to the chat
  getUserUsername(userId: string) {
    for (var i = 0; i < this.users.length; i++) {
      const user = this.users[i]
      if (user._id == userId) {
        return user.username
      }
    }
    //User is not subscribed to the chat
    return null
  }

  //Retrieves user either from database or from local users variable
  getUsers() {
    if (this.chat == undefined || this.chat == null) return
    this.users = []
    for (var i = 0; i < this.chat.subIds.length; i++) {
      const userId = this.chat.subIds[i]
      this.getUser(userId).then(
        (resolve: User) => {
          this.users.push(resolve)
      }
      ).catch((reject) => console.log(reject))
    }
  }

  getUser(userId: string) {
    return new Promise((resolve, reject) => {
      this.http.get(USER_API + userId)
        .subscribe((user: RawUser) => {
          if (user == undefined || user == null) reject("Error retrieving user")
          resolve(this.getUserFromRawUser(user))
        })
    })
  }

  initServerSocket() {
    this.http.get(CHAT_API + "init")
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
    this.http.post(CHAT_API + "chat-create/create", body, { headers: headers })
      .subscribe(res => console.log(res))
  }

  // Requests a subscription to a given chat
  subscribeToChat() {
    return new Promise( (resolve, reject) => {
      if (this.chatId == undefined || this.chatId == null) reject("Bad Data")
      this.http.get(CHAT_API + "subscribe/" + this.chatId)
      .subscribe((res: {_id: string}) => {
        //Get user and not just user id
        if (res == undefined || res == null) reject("Subscription was unsuccessful")
        this.chat.subIds.push(res._id)
        this.updateChat()
        resolve(0)
      })
    })
  }

  //Creates user object from database raw user data
  getUserFromRawUser(rawUser: RawUser): User {
    return {
      username: rawUser.username,
      email: rawUser.email,
      subIds: rawUser.subscription_ids,
      chatIds: rawUser.chat_ids,
      friendReqIds: rawUser.friend_request_ids,
      friendIds: rawUser.friend_ids,
      _id: rawUser._id
    }
  }

  //Update chat object
  updateChat() {
    this.chatUpdated.next({...this.chat})
  }

  //Update users object
  updateUsers() {
    this.usersUpdated.next([...this.users])
  }
}
