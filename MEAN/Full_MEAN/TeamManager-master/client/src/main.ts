import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if ( environment.envType == 'prod' ) {
  enableProdMode();
}

console.warn('App running in MODE: ' + environment.envType);
console.warn('Current Environment Settings: ', environment);

platformBrowserDynamic().bootstrapModule(AppModule);