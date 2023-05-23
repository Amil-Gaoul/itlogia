import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, delay } from 'rxjs';

import { Product } from '../models';
import { DELAY } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private httpClient: HttpClient) {}

    /**
     * Возвращает список продуктов.
     * @returns Product[]
     */
    public getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('assets/mocks/products.json').pipe(delay(DELAY));
    }
}
