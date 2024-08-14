import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieConsentComponent } from './cookie/cookie-consent/cookie-consent.component';
import { SitePublicoComponent } from './site-publico/site-publico.component';
import { FormsModule } from '@angular/forms';
import { SiteClienteComponent } from './site-cliente/site-cliente/site-cliente.component';
import { NotificationComponent } from './site-cliente/site-cliente/notificacao/notification/notification.component';
import { HeaderComponent } from './header/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    CookieConsentComponent,
    SitePublicoComponent,
    SiteClienteComponent,
    NotificationComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  exports: [
    CookieConsentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
