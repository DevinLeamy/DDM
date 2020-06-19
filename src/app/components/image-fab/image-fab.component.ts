import { Component, Input } from "@angular/core"
import { DomSanitizer } from "@angular/platform-browser"

@Component({
        selector: "app-image-fab",
        templateUrl: "image-fab.component.html",
        styleUrls: ["image-fab.component.css"]
})
export class ImageFabComponent {
        @Input("imageUrl") imageUrl: string
        constructor(public DomSanitationService: DomSanitizer) {}
}
