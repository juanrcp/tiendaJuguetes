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

  //Variables necesarias
  clientes: any[] = [];
  juguetes: any[] = [];
  jugueteSelect: any;
  clienteSelect: any;
  jugueteVendido?: Juguetes;
  clienteVenta?: Clientes;

  //Perfil del formulario
  perfileForm = this.formulario.group({
    clienteSelect: [''],
    jugueteSelect: ['']

  });

  constructor(
    private ventasService: VentasService,
    private formulario: FormBuilder
  ) { }

  ngOnInit(): void {
    
    //Cargamos todos los clientes disponibles en la base de datos
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
   
    //Cargamos el catalogo disponible de juguetes
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

  //Metodo para vender
  vender(): void{

    //Guardamos los identificadores recogidos en el formulario
    let idJuguete = this.perfileForm.value['jugueteSelect'];
    let idCliente = this.perfileForm.value['clienteSelect'];

    //Rescatamos de la base de datos el juguete y el cliente selecionados por su identificador y mostramos sus datos 
    //para confirmar la venta y motramos mensaje de confirmacion
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
