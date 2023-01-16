import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuguetesListComponent } from './juguetes-list/juguetes-list.component';
import { JuguetesEditComponent } from './juguetes-edit/juguetes-edit.component';

const routes: Routes = [
  {path: "", component: JuguetesListComponent},
  {path: "juguete/:id/edit", component: JuguetesEditComponent},
  {path: "juguete/new", component: JuguetesEditComponent},
  {path:"**", redirectTo: "", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuguetesRoutingModule { }
