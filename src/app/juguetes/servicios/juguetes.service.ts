import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  //Coleccion de la base de datos
  coleccion = 'juguetes';

  constructor(

    private firebase: AngularFirestore) { }

  //Metodo del servicio para obtener todos los juguetes
  getAllJuguete() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  //Metodo del servicio para obtener un juguete concreto
  getJuguete(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  //Metodo del servicio para modificar un juguete en concreto
  updateJuguete(id: string, juguete: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(juguete);
  }

  //Metodo del servicio para añadir un nuevo juguete
  addJuguete(juguete: any): any{
    return this.firebase.collection(this.coleccion).add(juguete);
  }

  //Metodo del servicio para borrar un juguete en concreto
  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
