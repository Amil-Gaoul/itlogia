import { FormControl } from '@angular/forms';

export interface OrderForm {
    name: FormControl<string>;
    address: FormControl<string>;
    phone: FormControl<string>;
}
