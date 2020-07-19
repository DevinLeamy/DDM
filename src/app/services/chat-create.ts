//Service for the chat API
//Handles the creation of a single chat
const BASE_URL = ""
import { Injectable } from "@angular/core"
import { Location } from "@angular/common"
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { Chat } from '../models/chat'

@Injectable({
  providedIn: "root"
})
export class ChatCreateService {
        newChat: Chat
        newChatUpdated = new Subject<Chat>()

        constructor(private http: HttpClient, private location: Location) {}

        getNewChatUpdated() {
                return this.newChatUpdated.asObservable()
        }

        //Initializes new chat
        initNewChat() {
                this.newChat = {
                        _id: undefined,
                        tags: [],
                        title: undefined,
                        messages: [],
                        category: undefined,
                        adminId: undefined,
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

        //Changes client url
        go(route: string) {
                this.location.replaceState(route);
                window.location.reload()
        }
    
        //Create new chat
        postChat(title: string, adminId: string, category: string, global: boolean) {
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
                .subscribe( (res: string ) => {
                        console.log(res)
                        //Chat was created
                        this.postTags(this.newChat.tags, res)
                        .then( () => this.postCategory(category, res)
                        .then( () => {
                                //Visit then chat once it's been created
                                this.go("api/chat/view/" + res)
                        })
                )
          })
      }
    
      //Add newly created tags and update existing tags with chat sub
      postTags(tags: string[], chatId: string) {
                return new Promise((resolve, reject) => {
                        for (var i = 0; i < tags.length; i++) {
                                const body = {
                                        tag: tags[i],
                                        chatId: chatId
                                }
                                var headers = new HttpHeaders()
                                headers = headers.append('Content-type', 'application/json')
                                this.http.post(BASE_URL + "chat-create/addTag", body, { headers: headers })
                                        .subscribe( res => console.log(res) )
                                }
                        resolve(0)
                })
        }
    
        //Post category from newly created chat
        postCategory(category: string, chatId: string) {
                return new Promise((resolve, reject) => {
                        const body = {
                                category: category,
                                chatId: chatId
                        }
                        var headers = new HttpHeaders()
                        headers = headers.append('Content-type', 'application/json')
                        this.http.post(BASE_URL + "chat-create/addCategory", body, { headers: headers })
                                .subscribe( res => console.log(res) )
                        resolve(0)
                })
        }
        
        //Update new chat
        updateNewChat() {
                if (this.newChat === undefined || this.newChat === null) return 
                this.newChatUpdated.next({...this.newChat})
        }
}