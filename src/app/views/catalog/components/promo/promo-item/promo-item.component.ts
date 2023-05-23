import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from './../../../../../shared/components';
import { Promo } from './../../../../../core/models';

@Component({
    selector: 'it-promo-item',
    standalone: true,
    imports: [CommonModule, SvgIconComponent],
    templateUrl: './promo-item.component.html',
    styleUrls: ['./promo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoItemComponent {
    @Input() public promo: Promo;
}
