import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, tap } from 'rxjs';
import { IAlbum, Lightbox, LightboxModule } from 'ngx-lightbox';

import { ProductComponent } from './product/product.component';
import { Product } from './../../../../core/models';
import { ProductService } from './../../../../core/services';

@Component({
    selector: 'it-products',
    standalone: true,
    imports: [CommonModule, LightboxModule, ProductComponent],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
