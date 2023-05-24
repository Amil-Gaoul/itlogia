import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'it-dialog',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
    constructor(private dialogRef: DialogRef) {}

    public onClose(): void {
        this.dialogRef.close();
    }
}
