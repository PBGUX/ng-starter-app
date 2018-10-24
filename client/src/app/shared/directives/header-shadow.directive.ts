import { Directive, HostBinding, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appHeaderShadow]'
})
export class HeaderShadowDirective implements OnInit, OnDestroy {
    @HostBinding('class.shadow') shadow: boolean;

    constructor() { }

    ngOnInit() {
        if (typeof window !== undefined) {
            window.addEventListener('scroll', () => this._checkScroll());
        }
    }

    ngOnDestroy() {
        if (typeof window !== undefined) {
            window.removeEventListener('scroll', () => this._checkScroll());
        }
    }

    private _checkScroll() {
        if (typeof window !== undefined) {
            this.shadow = window.pageYOffset > 20;
        }
    }
}
