import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './../site-admin/login-admin.component';
import { SitePublicoComponent } from './site-publico/site-publico.component';
import { LoginClienteComponent } from 'src/site-cliente/login-cliente.component';

const routes: Routes = [

  { path: '', component: SitePublicoComponent }, // Rota padrão para o site público
  {
    path: 'admin',
    children: [
      { path: 'login-admin', component: LoginAdminComponent },
      // { path: 'home', component: HomeComponent } // Supondo que o componente de home seja compartilhado entre admin e cliente
    ]
  },
  {
    path: 'cliente',
    children: [
      { path: 'login-cliente', component: LoginClienteComponent },
    ]
  },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
