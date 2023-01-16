import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css']
})
export class ClientesEditComponent implements OnInit {

  cliente?: any;
  nuevoCliente: boolean = false;
 
  perfileForm = this.fb.group({
    
    nombreCompleto: [''],
    nif: [''],
    contacto: {
        telefono: [''],
        movil: [''],
        correo: ['']
    },
    direccion: {
        calle: [''],
        ciudad: ['']
    }
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private clientesService: ClientesService,
    private location: Location

  ) { }

  ngOnInit() {

    if(this.route.snapshot.paramMap.get('id')){

      this.nuevoCliente = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.clientesService.getClientes(id).subscribe((resp: any) => {
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevoCliente = true;
      console.log(this.perfileForm.value);
    }
  }

  guardar(): void {

    if(this.nuevoCliente){
      this.clientesService.addClientes(this.perfileForm.value).then(
        () => {
          alert("Nuevo Cliente Creado.");
          console.log("Nuevo Cliente Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );

    }else{

      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.clientesService.updateClientes(id, this.perfileForm.value).then(
        () => {
          alert("Cliente Modificado");
          console.log("Cliente Modificado.");
        }, (error: any) => {
          console.log(error);
        }
      )
    }
  }

  volver(): void {
    this.location.back();
  }

}
