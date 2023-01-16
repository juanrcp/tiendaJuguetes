import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresListComponent } from './proveedores-list/proveedores-list.component';
import { ProveedoresEditComponent } from './proveedores-edit/proveedores-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProveedoresListComponent,
    ProveedoresEditComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProveedoresModule { }
