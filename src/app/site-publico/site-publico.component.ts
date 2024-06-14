import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './site-publico.component.html',
  styleUrls: ['./site-publico.component.scss']
})
export class SitePublicoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


navigateCliente(){
  this.router.navigate(['cliente/login-cliente']);
}

navigateAdmin(){
  this.router.navigate(['admin/login-admin']);
}
}
