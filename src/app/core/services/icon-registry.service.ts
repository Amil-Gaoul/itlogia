import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

import { Observable, of, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class IconRegistryService {
    private svgIconConfigs: Map<string, SVGElement> = new Map<string, SVGElement>();

    constructor(@Optional() private httpClient: HttpClient, @Inject(DOCUMENT) private document: Document) {}

    /**
     * Добавляет иконку.
     * @param iconName имя иконки
     * @param url урл, где лежит иконка
     * @returns Observable<string | SVGElement>
     */
    public addSvgIcon(iconName: string, url: string): Observable<SVGElement> {
        const icon: SVGElement = this.svgIconConfigs.get(iconName);
        if (icon) {
            return of(icon);
        }
        return this.httpClient.get<string>(url, { responseType: 'text' as 'json' }).pipe(
            map((res: string): SVGElement => {
                const domParser: DOMParser = new DOMParser();
                const element: HTMLElement = domParser.parseFromString(res, 'image/svg+xml').documentElement;
                const svg: SVGElement = this.toSvgElement(element);
                this.svgIconConfigs.set(iconName, svg);
                return svg;
            })
        );
    }

    /**
     * Возвращает иконку.
     * @param iconName имя иконки
     * @returns SVGElement
     */
    public getSvgIcon(iconName: string): SVGElement {
        return this.svgIconConfigs.get(iconName);
    }

    private toSvgElement(element: HTMLElement): SVGElement {
        const div: HTMLElement = this.document.createElement('DIV');
        div.innerHTML = element.outerHTML;
        const svg: SVGElement = div.querySelector('svg') as SVGElement;
        if (!svg) {
            throw Error('<svg> тег не найден!!!');
        }
        return svg;
    }
}
