import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components';
import { ButtonComponent } from './shared/components';

@Component({
    selector: 'it-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ButtonComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {}
