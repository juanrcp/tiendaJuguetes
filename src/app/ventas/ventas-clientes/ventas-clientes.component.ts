import { Component, OnInit } from '@angular/core';
import { VentasService } from '../servicio/ventas.service';
import { FormBuilder } from '@angular/forms';
import { Juguetes } from '../../juguetes/interfaz/juguetes';
import { Clientes } from '../../clientes/interfaz/clientes';

@Component({
  selector: 'app-ventas-clientes',
  templateUrl: './ventas-clientes.component.html',
  styleUrls: ['./ventas-clientes.component.css']
})
export class VentasClientesComponent implements OnInit {

  clientes: any[] = [];
  juguetes: any[] = [];
  jugueteSelect: any;
  clienteSelect: any;
  jugueteVendido?: Juguetes;
  clienteVenta?: Clientes;

  perfileForm = this.formulario.group({
    clienteSelect: [''],
    jugueteSelect: ['']

  });

  constructor(
    private ventasService: VentasService,
    private formulario: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.ventasService.listClientes().subscribe(
      (resp: any) => {
        this.clientes = [];
        resp.forEach((clienteData: any) =>{
          console.log(clienteData);
          this.clientes.push({
            id: clienteData.payload.doc.id,
            ...clienteData.payload.doc.data()
        });
      });
    });
   
    this.ventasService.listJuguete().subscribe(
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

  vender(): void{

    let idJuguete = this.perfileForm.value['jugueteSelect'];
    let idCliente = this.perfileForm.value['clienteSelect'];

    this.ventasService.getJuguete(idJuguete!).subscribe((resp: any) => {
      console.log("Venta realizada con exito de: " + (resp.payload.data()).nombre + ' por ' + (resp.payload.data()).precioVenta + '€.');
      this.jugueteVendido = resp.payload.data();
    });
    
    this.ventasService.getCliente(idCliente!).subscribe((resp: any) => {
      console.log("Venta realizada a: " + (resp.payload.data()).nombreCompleto);
      this.clienteVenta = resp.payload.data();
    });

    alert('Venta realizada!!!');
  }

}
