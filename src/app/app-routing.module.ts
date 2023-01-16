import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path: "", component: HomeComponent},
  {
    path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then
    (c => c.ClientesModule)    
  },

  {
    path: 'juguetes', loadChildren: () => import('./juguetes/juguetes.module').then
    (j => j.JuguetesModule)    
  },

  {
    path: 'proveedores', loadChildren: () => import('./proveedores/proveedores.module').then
    (p => p.ProveedoresModule)    
  },
  {path:'**', redirectTo:'/', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
