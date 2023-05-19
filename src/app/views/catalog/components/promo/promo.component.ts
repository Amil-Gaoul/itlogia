import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { PromoItemComponent } from './promo-item/promo-item.component';
import { Promo } from './../../../../core/models';
import { PromoService } from './../../../../core/services/promo.service';
import { ButtonComponent } from './../../../../shared/components';

@Component({
    selector: 'it-promo',
    standalone: true,
    imports: [CommonModule, PromoItemComponent, ButtonComponent],
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoComponent {
    public promos: Observable<Promo[]> = this.promoService.getPromo();

    constructor(private promoService: PromoService) {}
}
