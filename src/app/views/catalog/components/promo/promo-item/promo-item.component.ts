import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Promo } from '@core/models';
import { SvgIconComponent } from '@shared/components';

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
