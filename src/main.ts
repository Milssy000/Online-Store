import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableDebugTools } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(moduleRef => {
	const applicationRef = moduleRef.injector.get(ApplicationRef);
	const componentRef = applicationRef.components[0];
	
	enableDebugTools(componentRef);
})
.catch(err => console.log(err));

