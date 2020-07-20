import { Component, OnInit, OnDestroy } from "@angular/core"
import { NgForm, FormControl } from "@angular/forms"
import { ChatsService } from "../../../services/chats"
import { Observable, Subscription } from "rxjs"
import { map, startWith } from 'rxjs/operators'

@Component({
        selector: "app-chat-search",
        templateUrl: "chat-search.component.html",
        styleUrls: ["chat-search.component.css"]
})
export class ChatSearchComponent implements OnInit, OnDestroy {
        formControlTags = new FormControl()
        formControlTitles = new FormControl()
        categories: String[] = [
                "Any",
                "Science and Tech",
                "Entertainment",
                "Esports",
                "Sports",
                "Other"
        ]
        titleValue: string = ""
        tagValue: string = ""
        queriedTags: boolean = false
        queriedTitles: boolean = false
        titleOptions: string[] = []
        tagOptions: string[] = []
        tagOptionsSub: Subscription
        titleOptionsSub: Subscription
        filteredTitleOptions: Observable<string[]>
        filteredTagOptions: Observable<string[]>
        tags: string[] = []
        searching: boolean = false
        searchResults: string[] = [] //Chat ids
        constructor(private chatsService: ChatsService) {}

        ngOnInit() {
                this.filteredTagOptions = this.formControlTags.valueChanges.pipe(
                        startWith(''),
                        map(value => this.tagFilter(value))
                )
                this.filteredTitleOptions = this.formControlTitles.valueChanges.pipe(
                        startWith(''),
                        map(value => this.titleFilter(value))
                )

                this.titleOptionsSub = this.chatsService.getChatTitlesUpdated() 
                        .subscribe( titleOptions => {
                                this.titleOptions = titleOptions
                                this.titleOptionsSub.unsubscribe()
                        })
                this.tagOptionsSub = this.chatsService.getTagsUpdated() 
                        .subscribe( tagOptions => {
                                this.tagOptions = tagOptions
                                this.tagOptionsSub.unsubscribe()
                        })
                this.chatsService.getAllTags()
                this.chatsService.getAllChatTitles()
        }

        //Adds a new tag to the list of tags
        addTag() {
                const newTag = this.fixTag(
                                this.tagValue
                                .trim()
                                .toLowerCase()
                        )
                        .split(/\s+/g)
                        .join('‑')
                this.tagValue = ""
                if (newTag === null || newTag === undefined || newTag === "" || newTag === "new tag") return
                if (this.tags.indexOf(newTag) === -1 && this.tags.length <= 6) {
                        this.tags.push(newTag)
                }
        }

        //Removes a given tag
        removeTag(tag: string) {
                const index = this.tags.indexOf(tag)
                if (index !== -1) {
                        this.tags.splice(index, 1)
                }
        }

        //Replace underscores and hyphens with no breakable hyphen
        fixTag(tag: string) {
                for (var i = 0; i < tag.length; i++) {
                        if (tag[i] === '_' || tag[i] === '-') {
                                tag = this.replaceAt(tag, i, '‑')
                        }
                }
                return tag
        }

        //Search chats based on query params
        searchChats(category: string) {
                if (this.searching) return
                this.searching = true
                if (category === undefined || category === null || category === "") {
                        category = "Any"
                }
                this.chatsService.searchChats(category, this.titleValue, this.tags)
                        .then((results: string[]) => {
                                this.searchResults = results
                                this.chatsService.getChats(this.searchResults)
                                this.searching = false
                        })
                        .catch(reject => {
                                console.log(reject)
                                this.searching = false
                        })
                return
        }

        //Replace character at index
        replaceAt(current: string, index: number, replacement: string) {
                return current.substr(0, index) + replacement + current.substr(index + replacement.length);
        }

        //https://stackblitz.com/angular/mjxnrkeoknp?file=src%2Fapp%2Fautocomplete-auto-active-first-option-example.ts
        tagFilter(value: string): string[] {
                const filterValue = value.toLowerCase()    
                return this.tagOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0)
        }

        titleFilter(value: string): string[] {
                const filterValue = value.toLowerCase()
                return this.titleOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0)
        }
        
        ngOnDestroy() {
                this.tagOptionsSub.unsubscribe()
                this.titleOptionsSub.unsubscribe()
        }
}