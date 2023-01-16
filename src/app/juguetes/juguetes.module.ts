import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuguetesRoutingModule } from './juguetes-routing.module';
import { JuguetesListComponent } from './juguetes-list/juguetes-list.component';
import { JuguetesEditComponent } from './juguetes-edit/juguetes-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JuguetesListComponent,
    JuguetesEditComponent
  ],
  imports: [
    CommonModule,
    JuguetesRoutingModule,
    ReactiveFormsModule
  ]
})
export class JuguetesModule { }
