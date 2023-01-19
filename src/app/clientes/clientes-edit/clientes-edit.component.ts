import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../servicios/clientes.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css']
})
export class ClientesEditComponent implements OnInit {

  //Variables necesarias
  cliente?: any;
  nuevoCliente: boolean = false;
 
  //Perfil del formulario
  perfileForm = this.fb.group({
    
    nombreCompleto: [''],
    nif: [''],
    contacto: this.fb.group ({
        telefono: [''],
        movil: [''],
        correo: ['']
    }),
    direccion: this.fb.group ({
        calle: [''],
        ciudad: ['']
    })
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private clientesService: ClientesService,
    private location: Location

  ) { }

  ngOnInit() {

    //Si la url nos devuelve un identificador rellenamos el fromulario con sus valores y podremos editarlo
    //y si no creamos un cliente nuevo
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
    }
  }

  //Metodo para guardar a los clientes
  guardar(): void {

    //Si el cliente es nuevo lo creo
    if(this.nuevoCliente){
      console.log(this.perfileForm.value);
      this.clientesService.addClientes(this.perfileForm.value).then(
        () => {
          alert("Nuevo Cliente Creado.");
          console.log("Nuevo Cliente Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );

    }else{

      //Si el cliente no es nuevo obtengo el identificador y lo modifico
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

  //Metodo para volver al sitio anterior.
  volver(): void {
    this.location.back();
  }

}
