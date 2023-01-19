import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JuguetesService } from '../servicios/juguetes.service';
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

    //Si hay un identificador en la url rescatamos el juguete de la base de datos y rellenamos el formulario
    //con sus datos y asi poder editarlo
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

  //Metodo para guardar el jueguete
  guardar(): void {

    //Si el juguete es nuevo lo creamos en la base de datos con los datos recogidos en el formulario
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

      //Si no es nuevo rescatamos sus datos de la base de datos con la id de la url y modificamos sus datos
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

  //Metodo para volver a la vista anterior
  volver(): void {
    this.location.back();
  }

}
