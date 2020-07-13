import { Component, Input, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

@Component({
        selector: "app-header",
        templateUrl: "header.component.html",
        styleUrls: ["header.component.css"]
})
export class HeaderComponent implements AfterViewInit {
        @Input("imageUrl") imageUrl: string
        @Input("headerText") headerText: string
        @ViewChild("headerTextElement") headerTextElement: ElementRef
        @Input("color") color: string = "white"

        ngAfterViewInit() {
                this.headerTextElement.nativeElement.style.color = this.color
        }

}