import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Juguetes } from '../../juguetes/interfaz/juguetes';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  //Coleeciones de la base de datos
  clientes: string = 'clientes';
  juguetes: string = 'juguetes';

  constructor(
    private fire: AngularFirestore
  ) { }

  //Metodo del servicio para obtener todos los clientes de la base de datos
  listClientes(): any {
    return this.fire.collection(this.clientes).snapshotChanges();
  }

  //Metodo del servicio para obtener todos los juguetes de la base de datos
  listJuguete(): any {
    return this.fire.collection(this.juguetes).snapshotChanges();
  }

  //Metodo del servicio para obtener un juguete en concreto segun su identificador de la base de datos
  getJuguete(id: string): any{
    return this.fire.collection(this.juguetes).doc(id).snapshotChanges();
  }

  //Metodo del servicio para obtener un juguete en concreto segun su identificador de la base de datos
  getCliente(id: string): any{
    return this.fire.collection(this.clientes).doc(id).snapshotChanges();
  }
}
