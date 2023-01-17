import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasClientesComponent } from './ventas-clientes/ventas-clientes.component';

const routes: Routes = [
  {path:'', component: VentasClientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
