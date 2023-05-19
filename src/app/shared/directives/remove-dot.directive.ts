import { Directive, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[itRemoveDot]',
    standalone: true,
})
export class RemoveDotDirective {
    @Input('itRemoveDot') public isRemove: boolean = false;

    @HostListener('input', ['$event.target'])
    public onInputChange(input: HTMLInputElement): void {
        if (this.isRemove) {
            input.value = input.value.replace(/\./g, '');
        }
    }
}
