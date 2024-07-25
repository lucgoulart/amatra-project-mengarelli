import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitePublicoComponent } from './site-publico/site-publico.component';

const routes: Routes = [

  { path: '', component: SitePublicoComponent }, // Rota padrão para o site público
  {
    path: '',
    children: [
      // { path: 'login-admin', component: LoginAdminComponent },
    ]
  },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
