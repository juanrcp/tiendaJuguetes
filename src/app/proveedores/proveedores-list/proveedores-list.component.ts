import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.css']
})
export class ProveedoresListComponent implements OnInit {

  proveedores?: any[];

  constructor(

    private proveedoresService: ProveedoresService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.proveedoresService.getAllProveedor().subscribe(
      (resp: any) => {
        this.proveedores = [];
        resp.forEach((proveedoresData: any) =>{
          console.log(proveedoresData);
          this.proveedores!.push({
            id: proveedoresData.payload.doc.id,
            ...proveedoresData.payload.doc.data()
          })
        });
      }
    )
  }

  borrar(id: string): void{

    this.proveedoresService.delete(id);
    alert("Cliente Borrado");
    console.log("Cliente Borrado");
  }

}
