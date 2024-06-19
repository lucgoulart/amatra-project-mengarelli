import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {

  constructor(private router: Router) { }
  activeContent: string = 'amatra';
  currentDate: string = '';
  currentYear: string = '';
  currentTime: string = '';

  showContent(content: string) {
    this.activeContent = content;
  }

  ngOnInit(): void {
    this.updateCurrentDateTime();
    // Atualiza a cada segundo
    setInterval(() => {
      this.updateCurrentDateTime();
    }, 1000);
    this.activeContent = 'amatra';
  }

  private updateCurrentDateTime(): void {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    this.currentDate = `${day}/${month}`;
    this.currentYear = `${year}`;
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }
}
