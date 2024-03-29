import { FavouriteService } from './services/favourite.service';

import { ErrorComponent } from './common/error.component';
import { AppRoutingModule } from './app-routing.module';




import { ContactComponent } from './common/contact.component';
import { HomeComponent } from './common/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './services/global-error.handler';
import { NotificationComponent } from './common/notification.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NotificationService } from './services/notification.service';
import { ErrorService } from './services/error.service';
import { HttpErrorInterceptor } from '../app/interceptors/http-error.interceptor';
import { CartService } from './services/cart.service';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';
import { DialogService } from './services/dialog.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';



export function GetToken(): string {
  return localStorage.getItem('auth_token');
}

const moduleComponents = [
  AppComponent,
  HomeComponent,
  ContactComponent,

  ErrorComponent,
  NotificationComponent
]

const moduleDirectives = [
]

const modulePipes = [
]

const moduleImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  JwtModule.forRoot({
    config: {
      tokenGetter: GetToken,
      whitelistedDomains: ['localhost:10001', 'storerestservice.azurewebsites.net']
    }
  }),
  AppRoutingModule
]


const moduleExports = [
]

const moduleServices = [
  FavouriteService,
  ErrorService, 
  CartService,
  NotificationService,
  CanDeactivateGuard,
  DialogService,
  {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
  
]

@NgModule({
  declarations: [
    ...moduleComponents,
    ...moduleDirectives,
    ...modulePipes
  ],
  imports: [
    ...moduleImports,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    ...moduleExports
  ],
  providers: [
    ...moduleServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //comment
}
