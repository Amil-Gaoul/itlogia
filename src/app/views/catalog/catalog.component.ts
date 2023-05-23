import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';

import { Observable } from 'rxjs';

import { PromoComponent } from './components/promo/promo.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
    selector: 'it-catalog',
    standalone: true,
    imports: [CommonModule, PromoComponent, OrderComponent, ProductsComponent],
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {}
