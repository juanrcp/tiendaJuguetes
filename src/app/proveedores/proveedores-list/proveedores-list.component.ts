import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.css']
})
export class ProveedoresListComponent implements OnInit {

  //Varibles necesarias
  proveedores: any[] = [];

  constructor(

    private proveedoresService: ProveedoresService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //Rescatamos todos los proveedores de la base de datos y mostramos sus datos uno a uno en la lista
    this.proveedoresService.getAllProveedor().subscribe(
      (resp: any) => {
        this.proveedores = [];
        resp.forEach((proveedoresData: any) =>{
          console.log(proveedoresData);
          this.proveedores.push({
            id: proveedoresData.payload.doc.id,
            ...proveedoresData.payload.doc.data()
          })
        });
      }
    )
  }

  //Metodo para borrar un proveedor en concreto
  borrar(id: string): void{

    this.proveedoresService.delete(id);
    alert("Proveedor Borrado");
    console.log("Proveedor Borrado");
  }

}
