import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MenuModule } from 'primeng/menu';

import MyPreset from './theme/MyPreset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p', // Prefijo para variables CSS
          cssLayer: false, // Opcional: configura si usas CSS layers
          darkModeSelector: 'light'
        }
      }
    }),
    MenuModule
  ]
};
