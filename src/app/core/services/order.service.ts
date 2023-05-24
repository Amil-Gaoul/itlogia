import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, map, Observable } from 'rxjs';

import { DELAY } from '@core/constants';
import { Order } from '@core/models';

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
