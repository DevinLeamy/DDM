import { Component, Input } from '@angular/core'

@Component({
  selector: "app-message-received",
  templateUrl: "message-received.component.html",
  styleUrls: ["message-received.component.css"]
})
export class MessageReceivedComponent {
  @Input() senderUsername: string
  @Input() senderImage: string
  @Input() timestamp: number

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
      if (dateSplit[2][1] === '2') date += "nd"
      if (dateSplit[2][1] === '3') date += "rd"
      else date += "th"
    } else {
      if (dateSplit[2] === "1") date += "st"
      if (dateSplit[2] === "2") date += "nd"
      if (dateSplit[2] === "3") date += "rd"
      else date += "th"
    }
    return date
  }
}
