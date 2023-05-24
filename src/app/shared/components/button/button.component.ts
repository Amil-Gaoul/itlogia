import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'it-button, [itButton]',
    standalone: true,
    imports: [CommonModule],
    template: ' <ng-content></ng-content> ',
    styles: [
        `
            @import 'variables';

            :host {
                height: 50px;
                background-color: $yellow;
                border: none;
                line-height: 50px;
                font-size: 16px;
                font-weight: 600;
                text-align: center;
                color: $button;
                cursor: pointer;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {}
