import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  notificationCount: number = 5; // Exemplo de contagem de notificações
  notifications: string[] = [
    "Hoje é o aniversário do Eduardo Saldanha. Dê os parabéns a ele!",
    "Hoje é o aniversário do Matheus Silva. Dê os parabéns a ele!",
    "Hoje é aniversário do Lucas Goulart. Dê os parabéns a ele!",
    "Hoje é o aniversário do Eduardo Saldanha. Dê os parabéns a ele!",
    'Notificação 2',
    'Notificação 3',
    "Hoje é o aniversário do Eduardo Saldanha. Dê os parabéns a ele!",
    'Notificação 2',
    'Notificação 3',
    "Hoje é o aniversário do Eduardo Saldanha. Dê os parabéns a ele!",
    'Notificação 2',
    'Notificação 3',
    "Hoje é o aniversário do Eduardo Saldanha. Dê os parabéns a ele!",
    'Notificação 2',
    'Notificação 3'
  ];
  menuVisible: boolean = false;
  menuExpanded: boolean = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.menuExpanded = false; // Resetar o estado expandido ao alternar o menu
  }

  closeMenu() {
    this.menuVisible = false;
    this.menuExpanded = false; // Resetar o estado expandido ao fechar o menu
  }

  expandMenu(event: Event) {
    event.stopPropagation(); // Evita que o clique no expandir feche o menu
    this.menuExpanded = !this.menuExpanded; // Alterna entre expandido e não expandido
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.menuVisible && !this.menuExpanded) {
      const targetElement = event.target as HTMLElement;
      const notificationMenu = document.querySelector('.notification-menu');
      if (notificationMenu && !notificationMenu.contains(targetElement)) {
        this.menuVisible = true;
      }
    }
  }
}
