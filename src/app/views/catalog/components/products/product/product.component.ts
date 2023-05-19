import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../../../../core/models';
import { ButtonComponent } from '../../../../../shared/components';

@Component({
    selector: 'it-product',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    @Input() public product: Product;
    @Output() public viewImage: EventEmitter<void> = new EventEmitter<void>();

    public onOpenImage(): void {
        this.viewImage.emit();
    }
}
