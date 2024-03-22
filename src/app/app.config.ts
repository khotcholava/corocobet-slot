import { ApplicationConfig, importProvidersFrom, isDevMode, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { NgxsModule } from '@ngxs/store';
import { SlotState } from './pages/slots';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ka'
    },
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['ka'],
        defaultLang: 'ka',
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    importProvidersFrom(
      NgxsModule.forRoot([
        SlotState
      ]),
    ),
  ]
};
