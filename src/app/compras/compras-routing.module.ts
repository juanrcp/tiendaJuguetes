import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasProveedoresComponent } from './compras-proveedores/compras-proveedores.component';

const routes: Routes = [
  {path: '', component: ComprasProveedoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
