import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresEditComponent } from './proveedores-edit/proveedores-edit.component';
import { ProveedoresListComponent } from './proveedores-list/proveedores-list.component';

const routes: Routes = [
  {path: "", component: ProveedoresListComponent},
  {path: "proveedor/:id/edit", component: ProveedoresEditComponent},
  {path: "proveedor/new", component: ProveedoresEditComponent},
  {path:"**", redirectTo: "", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
