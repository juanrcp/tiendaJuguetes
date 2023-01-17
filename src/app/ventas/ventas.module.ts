import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasClientesComponent } from './ventas-clientes/ventas-clientes.component';


@NgModule({
  declarations: [
    VentasClientesComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
