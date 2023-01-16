import { Component, OnInit } from '@angular/core';
import { Juguetes } from '../interfaz/juguetes';
import { JuguetesService } from '../juguetes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juguetes-list',
  templateUrl: './juguetes-list.component.html',
  styleUrls: ['./juguetes-list.component.css']
})
export class JuguetesListComponent implements OnInit {

  juguetes?: any[];

  constructor(

    private juguetesService: JuguetesService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {

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

  borrar(id: string): void{

    this.juguetesService.delete(id);
    alert("Juguete Borrado");
    console.log("Juguete Borrado");
  }

}
