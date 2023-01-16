import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../interfaz/clientes';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes?: any[];

  constructor(

    private clientesService: ClientesService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.clientesService.getAllClientes().subscribe(
      (resp: any) => {
        this.clientes = [];
        resp.forEach((clientesData: any) =>{
          console.log(clientesData);
          this.clientes!.push({
            id: clientesData.payload.doc.id,
            ...clientesData.payload.doc.data()
          })
        });
      }
    )
  }

  borrar(id: string): void{

    this.clientesService.delete(id);
    alert("Cliente Borrado");
    console.log("Cliente Borrado");
  }

}
