import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRegistryService } from './../../../core/services';

@Component({
    selector: 'it-svg-icon',
    standalone: true,
    imports: [CommonModule],
    template: `<ng-content></ng-content>`,
    styles: [
        `
            :host {
                display: inline-block;
                color: inherit;
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
    @Input() public set name(iconName: string) {
        const path: string = `${this.iconsPath}/${iconName}.svg`;
        this.iconRegistry.addSvgIcon(iconName, path).subscribe((icon: SVGElement): void => {
            const { nativeElement }: { nativeElement: HTMLElement } = this.elementRef;
            if (nativeElement.childElementCount > 0) {
                nativeElement.childNodes.forEach((node: ChildNode): void => node.remove());
            }
            nativeElement.appendChild(icon.cloneNode(true));
        });
    }

    @Input()
    @HostBinding('attr.title')
    public title: string;

    private iconsPath: string = 'assets/icons';

    constructor(private elementRef: ElementRef<HTMLElement>, private iconRegistry: IconRegistryService) {}
}
