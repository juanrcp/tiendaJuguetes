import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasProveedoresComponent } from './compras-proveedores/compras-proveedores.component';


@NgModule({
  declarations: [
    ComprasProveedoresComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
