import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IAlbum, Lightbox, LightboxModule } from 'ngx-lightbox';
import { Observable, tap } from 'rxjs';

import { Product } from '@core/models';
import { ProductService } from '@core/services';

import { ProductComponent } from './product/product.component';

@Component({
    selector: 'it-products',
    standalone: true,
    imports: [CommonModule, LightboxModule, ProductComponent],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
    public products: Observable<Product[]> = this.productsService.getProducts().pipe(
        tap((products: Product[]): void => {
            this.album = products.map((product: Product): IAlbum => ({ src: product.imageUrl, caption: product.title, thumb: product.imageUrl }));
        })
    );

    private album: IAlbum[];

    constructor(private productsService: ProductService, private lightbox: Lightbox) {}

    public onViewImage(imageIndex: number): void {
        this.lightbox.open(this.album, imageIndex);
    }
}
