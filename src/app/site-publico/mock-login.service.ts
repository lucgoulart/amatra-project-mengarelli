// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockLoginService {

  private validUser = {
    email: 'salmanlucas17@outlook.com',
    password: '12345678'
  };

  constructor() { }

  login(email: string, password: string): boolean {
    return email === this.validUser.email && password === this.validUser.password;
  }
}
