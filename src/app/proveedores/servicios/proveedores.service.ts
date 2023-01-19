import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  //Coleccion de la base de datos
  coleccion = 'proveedores';

  constructor(

    private firebase: AngularFirestore) { }

  //Metodo del servicio para obtener de la base de datos todos los proveedores
  getAllProveedor() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  //Metodo del servicio para obtener un proveedor en concreto segun su identificador
  getProveedor(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  //Metodo del servicio para modificar un proveedor en concreto de la base de datos
  updateProveedor(id: string, proveedor: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(proveedor);
  }

  //Metodo del servicio para añadir un proveedor nuevo a la base de datos 
  addProveedor(proveedor: any): any{
    return this.firebase.collection(this.coleccion).add(proveedor);
  }

  //Metodo del servicio para borrar un proveedor en concreto de la base de datos 
  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
