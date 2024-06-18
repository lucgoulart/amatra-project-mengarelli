import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieConsentComponent } from './cookie/cookie-consent/cookie-consent.component';
import { SitePublicoComponent } from './site-publico/site-publico.component';


@NgModule({
  declarations: [
    AppComponent,
    CookieConsentComponent,
    SitePublicoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  exports: [
    CookieConsentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
