import { Component, OnInit } from '@angular/core';
import { JuguetesService } from '../servicios/juguetes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juguetes-list',
  templateUrl: './juguetes-list.component.html',
  styleUrls: ['./juguetes-list.component.css']
})
export class JuguetesListComponent implements OnInit {

  //Variable necesaria
  juguetes?: any[];

  constructor(

    private juguetesService: JuguetesService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //Rescatamos a todos los juegues que hay en la base de datos y mostramos uno a uno sus datos en la lista
    this.juguetesService.getAllJuguete().subscribe(
      (resp: any) => {
        this.juguetes = [];
        resp.forEach((juguetesData: any) =>{
          console.log(juguetesData);
          this.juguetes!.push({
            id: juguetesData.payload.doc.id,
            ...juguetesData.payload.doc.data()
          })
        });
      }
    )
  }

  //Metodo para borrar un juguete
  borrar(id: string): void{

    this.juguetesService.delete(id);
    alert("Juguete Borrado");
    console.log("Juguete Borrado");
  }

}
