import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../servicios/proveedores.service';
import { Location } from '@angular/common';
import { Proveedores } from '../interfaz/proveedores';

@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.css']
})
export class ProveedoresEditComponent implements OnInit {

  //Variables necesarias
  proveedor?: any;
  nuevoProveedor: boolean = false;
 
  //Perfil del formulario
  perfileForm = this.fb.group({
    
    nombreCompleto: [''],
    cif: [''],
    contacto: this.fb.group ({

      telefono: [''],
      movil: [''],
      correo: ['']
    }),
    direccion: this.fb.group({
      calle: [''],
      ciudad: ['']
    })
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private proveedoresService: ProveedoresService,
    private location: Location

  ) { }

  ngOnInit() {

    //Si hay una id en la ruta rescatamos de la base de datos el proveedor y rellenamos con sus datos el formulario
    //para asi poder editarlo
    if(this.route.snapshot.paramMap.get('id')){

      this.nuevoProveedor = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.proveedoresService.getProveedor(id).subscribe((resp: any) => {
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevoProveedor = true;
    }
  }

  //Metodo para guardar en la base de datos
  guardar(): void {

    //Si el proveedor es nuevo lo creamos en la base de datos usando los datos del formulario
    if(this.nuevoProveedor){

      this.proveedor = this.perfileForm.value;
      console.log(this.proveedor);
      this.proveedoresService.addProveedor(this.perfileForm.value).then(
        () => {
          alert("Nuevo Proveedor Creado.");
          console.log("Nuevo Proveedor Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );

    }else{

      //Si el proveedor no es nuevo obtenemos su identificador de la url y rellenamos los campos del formulario con
      //sus datos, con lo que conseguimos poder editarlo
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.proveedoresService.updateProveedor(id, this.perfileForm.value).then(
        () => {
          alert("Proveedor Modificado");
          console.log("Proveedor Modificado.");
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
