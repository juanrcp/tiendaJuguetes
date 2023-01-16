import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { JuguetesModule } from './juguetes/juguetes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    JuguetesModule,
    ProveedoresModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
