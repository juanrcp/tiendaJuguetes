import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../servicio/compras.service';
import { Juguetes } from '../../juguetes/interfaz/juguetes';
import { Proveedores } from '../../proveedores/interfaz/proveedores';

@Component({
  selector: 'app-compras-proveedores',
  templateUrl: './compras-proveedores.component.html',
  styleUrls: ['./compras-proveedores.component.css']
})
export class ComprasProveedoresComponent implements OnInit {

  proveedores: any[] = [];
  juguetes: any[] = [];
  jugueteSelect: any;
  proveedorSelect: any;

  constructor(
    private comprasService: ComprasService
  ) { }

  ngOnInit(): void {
    
    this.comprasService.listProveedor().subscribe(
      (resp: any) => {
        this.proveedores = [];
        resp.forEach((proveedorData: any) =>{
          console.log(proveedorData);
          this.proveedores.push({
            id: proveedorData.payload.doc.id,
            ...proveedorData.payload.doc.data()
        });
      });
    });
   
    this.comprasService.listJuguete().subscribe(
      (resp: any) => {
        this.juguetes = [];
        resp.forEach((jugueteData: any) =>{
          console.log(jugueteData);
          this.juguetes.push({
            id: jugueteData.payload.doc.id,
            ...jugueteData.payload.doc.data()
        });
      });
    });
  }
  
  comprar(): void{
    console.log(this.proveedorSelect);
    console.log(this.jugueteSelect.nombre);

    //alert('Juguete ' + this.jugueteSelect.nombre + ' comprado a ' + this.proveedorSelect.nombreCompleto + ' por ' + this.jugueteSelect.precioCompra + '.');
  }

}
