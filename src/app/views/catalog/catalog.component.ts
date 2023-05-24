import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { PromoComponent } from './components/promo/promo.component';

@Component({
    selector: 'it-catalog',
    standalone: true,
    imports: [CommonModule, PromoComponent, OrderComponent, ProductsComponent],
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {}
