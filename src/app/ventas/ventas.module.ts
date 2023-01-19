import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasClientesComponent } from './ventas-clientes/ventas-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VentasClientesComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    ReactiveFormsModule
  ]
})
export class VentasModule { }
