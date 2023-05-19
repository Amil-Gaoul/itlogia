import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';

import { DialogComponent } from './../../../../../shared/components';
import { SvgIconComponent } from './../../../../../shared/components';
import { Order } from 'src/app/core/models';

@Component({
    selector: 'it-success-dialog',
    standalone: true,
    imports: [CommonModule, DialogComponent, SvgIconComponent],
    templateUrl: './success-dialog.component.html',
    styleUrls: ['./success-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessDialogComponent {
    constructor(@Inject(DIALOG_DATA) public data: Order) {}
}
