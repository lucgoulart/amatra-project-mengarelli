import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-cliente',
  templateUrl: './site-cliente.component.html',
  styleUrls: ['./site-cliente.component.scss']
})
export class SiteClienteComponent implements OnInit {

  titleText: string = 'Central do Magistrado';  // Texto completo
  displayedText: string = '';  // Texto exibido na tela
  typingSpeed: number = 100;  // Velocidade de digitação em milissegundos
  pauseBeforeDeleting: number = 1000;  // Pausa antes de começar a apagar o texto
  deletingSpeed: number = 50;  // Velocidade de apagar o texto

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect(): void {
    let index = 1;  // Inicia em 1 para garantir que a primeira letra sempre apareça
    let isDeleting = false;
    let typingComplete = false; // Marca se a digitação está completa

    this.displayedText = this.titleText.charAt(0); // Exibe a primeira letra inicialmente

    const intervalId = setInterval(() => {
      if (!isDeleting) {
        if (index < this.titleText.length) {
          this.displayedText += this.titleText.charAt(index);
          index++;
        } else if (!typingComplete) {
          // Quando a digitação está completa, aguarda a pausa antes de apagar
          typingComplete = true;
          setTimeout(() => {
            isDeleting = true;
          }, this.pauseBeforeDeleting);
        }
      } else {
        if (index > 1) {  // Garante que a primeira letra não seja apagada
          this.displayedText = this.displayedText.slice(0, -1);
          index--;
        } else {
          // Reinicia o processo de digitação após apagar
          typingComplete = false;
          isDeleting = false;
          index = 1;  // Reinicia a digitação a partir da segunda letra
        }
      }
    }, isDeleting ? this.deletingSpeed : this.typingSpeed);
  }
}
