import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ButtonComponent, InputComponent } from './../../../../shared/components';
import { OrderService } from './../../../../core/services';
import { Order } from './../../../../core/models';
import { OrderForm } from './order-form.model';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@Component({
    selector: 'it-order',
    standalone: true,
    imports: [CommonModule, InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule, DialogModule],
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit {
    public form: FormGroup<OrderForm>;
    private isRequest: boolean = false;
    private destroyRef: DestroyRef = inject(DestroyRef);

    constructor(private formBuilder: FormBuilder, private dialog: Dialog, private orderService: OrderService) {}

    public ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            address: ['', [Validators.required]],
            phone: ['', [Validators.required]],
        });
    }

    public onDelivery(): void {
        if (this.form.valid && !this.isRequest) {
            this.isRequest = true;
            const order: Partial<Order> = {
                userName: this.form.get('name').value,
                address: this.form.get('address').value,
                phone: this.form.get('phone').value,
            };
            this.orderService
                .orderPizza(order)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((order: Order): void => {
                    this.isRequest = false;
                    this.form.reset();
                    this.dialog.open(SuccessDialogComponent, { data: order });
                });
        }
    }

    public isError(controlName: string): boolean {
        const control: AbstractControl = this.form.get(controlName);
        return control.invalid && control.touched;
    }
}
