import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../proveedores.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.css']
})
export class ProveedoresEditComponent implements OnInit {

  proveedor?: any;
  nuevoProveedor: boolean = false;
 
  perfileForm = this.fb.group({
    
    nombreCompleto: [''],
    cif: [''],
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
    private proveedoresService: ProveedoresService,
    private location: Location

  ) { }

  ngOnInit() {

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
      console.log(this.perfileForm.value);
    }
  }

  guardar(): void {

    if(this.nuevoProveedor){
      this.proveedoresService.addProveedor(this.perfileForm.value).then(
        () => {
          alert("Nuevo Proveedor Creado.");
          console.log("Nuevo Proveedor Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );

    }else{

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
