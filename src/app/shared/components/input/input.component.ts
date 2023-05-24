import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { RemoveDotDirective } from '@shared/directives';

@Component({
    selector: 'it-input',
    standalone: true,
    imports: [CommonModule, FormsModule, NgxMaskDirective, RemoveDotDirective],
    providers: [
        provideNgxMask(),
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputComponent,
            multi: true
        }
    ],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {
    @Input() public type: string = 'text';
    @Input() public label: string;
    @Input() public mask: string;
    @Input() public prefix: string;
    @Input() public removeDot: boolean;
    public onChange: (value: string) => void;
    public onTouched: () => void;
    private inputValue: string;
    private touched: boolean = false;

    public get value(): string {
        return this.inputValue;
    }

    public set value(value: string) {
        if (this.onChange) {
            this.onChange(value);
        }
    }

    public get prefixValue(): string {
        return this.value?.replace(this.prefix, '') ? this.prefix : '';
    }

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    public writeValue(value: string): void {
        this.inputValue = value;
        this.changeDetectorRef.markForCheck();
    }

    public registerOnChange(onChange: (value: string) => void): void {
        this.onChange = onChange;
    }

    public registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    public onMarkAsTouched(): void {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    public onInput(event: Event): void {
        const value: string = (<HTMLInputElement>event.target).value;
        this.writeValue(value);
        this.onChange(value);
        this.onTouched();
    }
}
