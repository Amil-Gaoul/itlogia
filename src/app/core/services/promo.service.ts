import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, Observable } from 'rxjs';

import { DELAY } from '@core/constants';
import { Promo } from '@core/models';

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
