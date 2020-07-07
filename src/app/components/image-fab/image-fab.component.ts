import { Component, Input } from "@angular/core"
import { DomSanitizer } from "@angular/platform-browser"

@Component({
        selector: "app-image-fab",
        templateUrl: "image-fab.component.html",
        styleUrls: ["image-fab.component.css"]
})
export class ImageFabComponent {
        @Input() imageUrl: string
        @Input() showStatus: boolean
        @Input() online: boolean
        constructor(public DomSanitationService: DomSanitizer) {}
}
