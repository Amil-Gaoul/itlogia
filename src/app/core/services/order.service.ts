import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, delay, map, of } from 'rxjs';

import { Order } from '../models';
import { DELAY } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private httpClient: HttpClient) {}

    /**
     * Заказ.
     * @returns Order
     */
    public orderPizza(order: Partial<Order>): Observable<Order> {
        return this.httpClient.get<Order>('assets/mocks/order.json').pipe(
            delay(DELAY),
            map((res: Order): Order => {
                const newOrder: Order = { ...res, userName: order.userName, address: order.address, phone: order.phone };
                return newOrder;
            })
        );
    }
}
