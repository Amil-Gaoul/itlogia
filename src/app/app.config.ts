import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const APP_CONFIG: ApplicationConfig = {
    providers: [provideRouter(routes), provideHttpClient()]
};
