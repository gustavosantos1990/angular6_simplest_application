import 'core-js/es7/reflect.js';
import 'zone.js/dist/zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));