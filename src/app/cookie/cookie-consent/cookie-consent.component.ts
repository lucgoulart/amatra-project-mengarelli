import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements AfterViewInit {
  cookiesAccepted = false;

  ngAfterViewInit(): void {
    this.cookiesAccepted = !!localStorage.getItem('cookiesAccepted');
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.cookiesAccepted = true;
  }
}
