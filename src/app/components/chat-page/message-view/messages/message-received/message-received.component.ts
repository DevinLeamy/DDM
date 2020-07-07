import { Component, Input, OnInit } from '@angular/core'
import { UsersService } from "../../../../../services/users"
import { UserSub } from 'src/app/models/user-sub'

@Component({
  selector: "app-message-received",
  templateUrl: "message-received.component.html",
  styleUrls: ["message-received.component.css"]
})
export class MessageReceivedComponent implements OnInit {
  @Input() senderId: string
  @Input() timestamp: number
  userSub: UserSub = {
    _id: "----",
    username: "loading...",
    image: "$$$Default$$$",
    online: false
  }

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    if (this.usersService.getUserSub(this.senderId)) {
      this.userSub = this.usersService.getUserSub(this.senderId)
    }
  }

  getTime(timestampMil: number) {
    const timestamp = new Date()
    //Converts the timestamp from milliseconds to the clients local time
    timestamp.setTime(timestampMil)
    //Raw Time 
    const rawTime = timestamp.toLocaleTimeString()
    const time = this.parseRawTime(rawTime)
    const rawDate = timestamp.toDateString()
    const date = this.parseRawDate(rawDate)
    return time + " " + date
  }

  //Format HH:MM:SS (AM/PM) -> HH:MM (AM/PM)
  parseRawTime(rawTime: string) {
    const splitTime = rawTime.split(":")
    const time = splitTime[0] + ":" + splitTime[1] + splitTime[2].split(" ")[1].toLowerCase()
    return time
  }

  //Format WEEKDAY MON DAY YEAR -> MON DAY
  parseRawDate(rawDate: string) {
    if (rawDate === new Date().toDateString()) return "Today"
    const dateSplit = rawDate.split(" ")
    var date = dateSplit[1] + " " + dateSplit[2]
    if (dateSplit[2].length === 2) {
      if (dateSplit[2][1] === '1') date += "st"
      else if (dateSplit[2][1] === '2') date += "nd"
      else if (dateSplit[2][1] === '3') date += "rd"
      else date += "th"
    } else {
      if (dateSplit[2] === "1") date += "st"
      else if (dateSplit[2] === "2") date += "nd"
      else if (dateSplit[2] === "3") date += "rd"
      else date += "th"
    }
    return date
  }
}
