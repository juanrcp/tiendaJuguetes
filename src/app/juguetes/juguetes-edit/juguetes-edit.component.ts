import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JuguetesService } from '../juguetes.service';
import { Location } from '@angular/common';
import { EdadesJuegoSelect, Juguetes } from '../interfaz/juguetes';

@Component({
  selector: 'app-juguetes-edit',
  templateUrl: './juguetes-edit.component.html',
  styleUrls: ['./juguetes-edit.component.css']
})
export class JuguetesEditComponent implements OnInit {

  juguete?: Juguetes;
  nuevoJuguete: boolean = false;
  //Array donde guardaremos los estamos
  edadesJuegoSelect: string[] = [];
  nuevaTarea: boolean = false;
 
  perfileForm = this.fb.group({
    
    identificador: [''],
    nombre: [''],
    descripcion: [''],
    categoria: [''],
    familia: [''],
    precioCompra: [''],
    precioVenta: ['']
    
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private jugueteService: JuguetesService,
    private location: Location

  ) { }

  ngOnInit() {

    //Rellenamos la array con los posubles estados 
    this.edadesJuegoSelect = EdadesJuegoSelect;

    if(this.route.snapshot.paramMap.get('id')){

      this.nuevoJuguete = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.jugueteService.getJuguete(id).subscribe((resp: any) => {
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevoJuguete = true;
      console.log(this.perfileForm.value);
    }
  }

  guardar(): void {

    if(this.nuevoJuguete){
      this.jugueteService.addJuguete(this.perfileForm.value).then(
        () => {
          alert("Nuevo Juguete Creado.");
          console.log("Nuevo Juguete Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );

    }else{

      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.jugueteService.updateJuguete(id, this.perfileForm.value).then(
        () => {
          alert("Juguete Modificado");
          console.log("Juguete Modificado.");
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
