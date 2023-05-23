import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, delay } from 'rxjs';

import { Promo } from '../models';
import { DELAY } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class PromoService {
    constructor(private httpCLient: HttpClient) {}

    /**
     * Возвращает список промо материалов.
     * @returns Promo[]
     */
    public getPromo(): Observable<Promo[]> {
        return this.httpCLient.get<Promo[]>('assets/mocks/promo.json').pipe(delay(DELAY));
    }
}
