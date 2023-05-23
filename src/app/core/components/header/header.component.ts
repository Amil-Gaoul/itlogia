import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurgerComponent } from './burger/burger.component';

@Component({
    selector: 'it-header',
    standalone: true,
    imports: [CommonModule, BurgerComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
