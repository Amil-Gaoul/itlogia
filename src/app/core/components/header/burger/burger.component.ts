import { ChangeDetectionStrategy, Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
    selector: 'it-burger',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './burger.component.html',
    styleUrls: ['./burger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BurgerComponent {
    public toggle: boolean;

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

    public onToggle(): void {
        this.toggle = !this.toggle;
        if (this.toggle) {
            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        } else {
            this.renderer.removeStyle(this.document.body, 'overflow');
        }
    }
}
