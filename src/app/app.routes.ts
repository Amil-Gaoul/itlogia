import { Type } from '@angular/core';
import { Routes } from '@angular/router';

import { CatalogComponent } from './views/catalog/catalog.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: (): Promise<Type<CatalogComponent>> =>
            import('./views/catalog/catalog.component').then(
                (com: { CatalogComponent: Type<CatalogComponent> }): Type<CatalogComponent> => com.CatalogComponent
            )
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
