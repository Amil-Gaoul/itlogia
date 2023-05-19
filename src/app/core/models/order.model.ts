/** Заказ. */
export interface Order {
    /** Имя покупателя. */
    userName: string;

    /** Адрес покупателя. */
    address: string;

    /** Телефон покупателя. */
    phone: string;

    /** Пицца, заказанная покупателем. */
    pizza: string;

    /** Количество. */
    quantity: number;

    /** Цена. */
    price: number;
}
