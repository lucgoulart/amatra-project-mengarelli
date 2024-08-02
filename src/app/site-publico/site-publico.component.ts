import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockLoginService } from './mock-login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './site-publico.component.html',
  styleUrls: ['./site-publico.component.scss']
})
export class SitePublicoComponent implements OnInit {
  activeContent: string = 'amatra';
  currentDateTime: string = '';
  usuario: string = '';
  password: string = '';
  showErrorModal: boolean = false;
  showInformations: boolean = false;
  showWelcomeModal: boolean = true; // Controla a exibição do modal de boas-vindas
  version: string = '2.0.0'; // Versão do sistema

  constructor(private router: Router, private mockLoginService: MockLoginService) { }

  login() {
    if (this.mockLoginService.login(this.usuario, this.password)) {
      // Redirecionar para a página principal ou fazer outra ação
      alert('Login bem-sucedido');
    } else {
      // Exibir o modal de erro
      this.showErrorModal = true;
    }
  }

  closeErrorModal() {
    this.showErrorModal = false;
  }

  showContent(content: string) {
    this.activeContent = content;
  }

  closeWelcomeModal() {
    this.showWelcomeModal = false;
  }

  ngOnInit(): void {
    this.showWelcomeModal = true;
    this.updateCurrentDateTime();
    setInterval(() => {
      this.updateCurrentDateTime();
    }, 1000);
    this.activeContent = 'amatra';
  }

  private updateCurrentDateTime(): void {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Mês é baseado em zero
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    this.currentDateTime = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  }
}
