import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Promo } from '@core/models';
import { PromoService } from '@core/services';
import { ButtonComponent } from '@shared/components';

import { PromoItemComponent } from './promo-item/promo-item.component';

@Component({
    selector: 'it-promo',
    standalone: true,
    imports: [CommonModule, PromoItemComponent, ButtonComponent],
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoComponent {
    public promos: Observable<Promo[]> = this.promoService.getPromo();

    constructor(private promoService: PromoService) {}
}
