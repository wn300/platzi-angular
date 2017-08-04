import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
    selector: '[title]'
})
export class TitleDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = '#1c3643';
        el.nativeElement.style.color = '#FFFFFF'
    }
}