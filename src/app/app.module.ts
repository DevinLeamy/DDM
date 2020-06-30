import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from "@angular/forms"
import { FlexLayoutModule } from "@angular/flex-layout"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'

import { HomePageComponent } from './components/home-page/home-page.component'
import { RegisterPageComponent } from "./components/register-page/register-page.component"
import { LoginPageComponent } from './components/login-page/login-page.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { AppComponent } from './app.component'
import { AuthenticationService } from './services/authentication'
import { UserService } from './services/user'
import { GlobalChatComponent } from './components/chat-page/global-chat/global-chat.component'
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { TokenInterceptor } from './services/token.interceptor'
import { MessageViewComponent } from './components/chat-page/message-view/message-view.component'
import { MessageCreateComponent } from './components/chat-page/message-view/message-create/message-create.component'
import { MessageReceivedComponent } from './components/chat-page/message-view/messages/message-received/message-received.component'
import { MessageSentComponent } from "./components/chat-page/message-view/messages/message-sent/message-sent.component"
import { CreateChatComponent } from "./components/create-chat/create-chat.component"
import { ChatDisplayComponent } from "./components/home-page/chat-display/chat-display.component"
import { ChatIconComponent } from "./components/home-page/chat-display/chat-icon/chat-icon.component"
import { UserPageComponent } from "./components/user-page/user-page.component"
import { UserIconComponent } from "./components/user-icon/user-icon.component"
import { ChatTitleComponent } from  "./components/chat-page/message-view/chat-title/chat-title.component"
import { ChatSubscribeComponent } from "./components/chat-page/message-view/chat-subscribe/chat-subscribe.component"
import { SubscribersViewComponent } from "./components/chat-page/subscribers-view/subscribers-view.component"
import { MessagesComponent } from "./components/chat-page/message-view/messages/messages.component"
import { UserFriendsViewComponent } from "./components/user-page/user-friends-view/user-friends-view.component"
import { UserViewComponent } from "./components/user-page/user-view/user-view.component"
import { UserChatsViewComponent } from "./components/user-page/user-chats-view/user-chats-view.component"
import { ImageFabComponent } from "./components/image-fab/image-fab.component"
import { ChatListComponent } from "./components/home-page/chat-display/chat-list/chat-list.component"
import { ChatTagsComponent } from "./components/create-chat/chat-tags/chat-tags.component"
import { TagComponent } from "./components/create-chat/chat-tags/tag/tag.component"

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    MessageViewComponent,
    MessageCreateComponent,
    MessageReceivedComponent,
    MessageSentComponent,
    GlobalChatComponent,
    CreateChatComponent,
    ChatDisplayComponent,
    ChatIconComponent,
    UserPageComponent,
    UserIconComponent,
    ChatTitleComponent,
    ChatSubscribeComponent,
    SubscribersViewComponent,
    MessagesComponent,
    UserFriendsViewComponent,
    UserViewComponent,
    UserChatsViewComponent,
    ImageFabComponent,
    ChatListComponent,
    ChatTagsComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
