import { DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { Order } from '@core/models';
import { DialogComponent, SvgIconComponent } from '@shared/components';

@Component({
    selector: 'it-success-dialog',
    standalone: true,
    imports: [CommonModule, DialogComponent, SvgIconComponent],
    templateUrl: './success-dialog.component.html',
    styleUrls: ['./success-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessDialogComponent {
    constructor(@Inject(DIALOG_DATA) public data: Order) {}
}
