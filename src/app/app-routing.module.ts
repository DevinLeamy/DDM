import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from './components/home-page/home-page.component'
import { GlobalChatComponent } from './components/chat-page/global-chat/global-chat.component'
import { UserPageComponent } from "./components/user-page/user-page.component"

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "api/chat/view/:id", component: GlobalChatComponent },
  { path: "api/user", component: UserPageComponent },
  { path: "**", redirectTo: "", component: HomePageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
