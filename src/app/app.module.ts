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
import { ComprasModule } from './compras/compras.module';
import { VentasModule } from './ventas/ventas.module';
import { MenuModule } from './menu/menu.module';
import { MenuGeneralComponent } from './menu/menu-general/menu-general.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    JuguetesModule,
    ProveedoresModule,
    ClientesModule,
    ComprasModule,
    VentasModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
