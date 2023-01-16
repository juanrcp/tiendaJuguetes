import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  coleccion = 'juguetes';

  constructor(

    private firebase: AngularFirestore) { }

  getAllJuguete() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  getJuguete(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  updateJuguete(id: string, juguete: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(juguete);
  }

  addJuguete(juguete: any): any{
    return this.firebase.collection(this.coleccion).add(juguete);
  }

  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
