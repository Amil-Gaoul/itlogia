import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components';
import { HeaderComponent } from './core/components';

@Component({
    selector: 'it-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ButtonComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'itlogia';
}
