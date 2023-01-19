import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  //Colecciones de la base de datos
  proveedores: string = 'proveedores';
  juguetes: string = 'juguetes';

  constructor(
    private fire: AngularFirestore
  ) { }

  //Metodo del servicio para rescatar de la base de datos a todos los proveedores
  listProveedor(): any {
    return this.fire.collection(this.proveedores).snapshotChanges();
  }

  //Metodo del servicio para rescatar de la base de datos a todos los juguetes
  listJuguete(): any {
    return this.fire.collection(this.juguetes).snapshotChanges();
  }

  //Metodo del servicio para rescatar de la base de datos a un juguete en concreto
  getJuguete(id: string): any{
    return this.fire.collection(this.juguetes).doc(id).snapshotChanges();
  }
  
  //Metodo del servicio para rescatar de la base de datos a un proveedor en concreto
  getProveedor(id: string): any{
    return this.fire.collection(this.proveedores).doc(id).snapshotChanges();
  }
}
