import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuGeneralComponent } from './menu-general/menu-general.component';
import { RouterLinkWithHref } from '@angular/router';



@NgModule({
  declarations: [
    MenuGeneralComponent
  ],
  imports: [
    CommonModule,
    //Sin esta importacion los enlaces del menu no funcionan
    RouterLinkWithHref
  ],

  exports: [
    //Exportamos el componente para poder usarlo en mas sitios
    MenuGeneralComponent
  ]
})
export class MenuModule { }
