import { Directive, HostBinding } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

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
