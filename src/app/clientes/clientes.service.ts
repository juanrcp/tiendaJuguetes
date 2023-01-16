import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  coleccion = 'clientes';

  constructor(

    private firebase: AngularFirestore) { }

  getAllClientes() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  getClientes(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  updateClientes(id: string, clientes: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(clientes);
  }

  addClientes(clientes: any): any{
    return this.firebase.collection(this.coleccion).add(clientes);
  }

  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
