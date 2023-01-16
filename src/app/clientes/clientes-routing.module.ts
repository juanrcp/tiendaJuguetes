import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesEditComponent } from './clientes-edit/clientes-edit.component';

const routes: Routes = [
  {path: "", component: ClientesListComponent},
  {path: "cliente/:id/edit", component: ClientesEditComponent},
  {path: "cliente/new", component: ClientesEditComponent},
  {path:"**", redirectTo: "", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
