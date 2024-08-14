import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitePublicoComponent } from './site-publico/site-publico.component';
import { SiteClienteComponent } from './site-cliente/site-cliente/site-cliente.component';

const routes: Routes = [

 {
    path: '',
    component: SitePublicoComponent,
  },

  {
    path: 'site-cliente',
    component: SiteClienteComponent ,
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
