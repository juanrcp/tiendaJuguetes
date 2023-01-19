import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //Coleeciones de la base de datos
  coleccion = 'clientes';

  constructor(

    private firebase: AngularFirestore) { }

  //Metodo del servicio para obtener todos los clientes
  getAllClientes() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  //Metodo del servicio para obtener un cliente concreto
  getClientes(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  //Metodo del servicio para modificar un cliente en concreto
  updateClientes(id: string, clientes: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(clientes);
  }

  ////Metodo del servicio para añadir un nuevo cliente
  addClientes(clientes: any): any{
    return this.firebase.collection(this.coleccion).add(clientes);
  }

  //Metodo del servicio para borrar un cliente en concreto.
  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
