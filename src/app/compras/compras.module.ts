import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasProveedoresComponent } from './compras-proveedores/compras-proveedores.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComprasProveedoresComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComprasModule { }
