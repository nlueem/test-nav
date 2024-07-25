import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import '@sbb-esta/lyne-elements/menu.js';
import '@sbb-esta/lyne-elements/navigation.js';
import '@sbb-esta/lyne-elements/header.js';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
