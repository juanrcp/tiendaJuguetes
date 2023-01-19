import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../servicio/compras.service';
import { Juguetes } from '../../juguetes/interfaz/juguetes';
import { Proveedores } from '../../proveedores/interfaz/proveedores';
import { FormBuilder } from '@angular/forms';

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
  jugueteComprado?: Juguetes;
  proveedorCompra?: Proveedores;

  perfileForm = this.formulario.group({
    proveedorSelect: [''],
    jugueteSelect: ['']

  });

  constructor(
    private comprasService: ComprasService,
    private formulario: FormBuilder
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

    let idJuguete = this.perfileForm.value['jugueteSelect'];
    let idProveedor = this.perfileForm.value['proveedorSelect'];

    this.comprasService.getJuguete(idJuguete!).subscribe((resp: any) => {
      console.log("Compra realizada con exito de: " + (resp.payload.data()).nombre + ' por ' + (resp.payload.data()).precioCompra) + '€.';
      this.jugueteComprado = resp.payload.data();
    });
    
    this.comprasService.getProveedor(idProveedor!).subscribe((resp: any) => {
      console.log("Venta realizada a: " + (resp.payload.data()).nombreCompleto);
      this.proveedorCompra = resp.payload.data();
    });

    alert('Compra realizada!!!');
  
  }

}
