import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Juguetes } from '../../juguetes/interfaz/juguetes';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  clientes: string = 'clientes';
  juguetes: string = 'juguetes';

  constructor(
    private fire: AngularFirestore
  ) { }

  listClientes(): any {
    return this.fire.collection(this.clientes).snapshotChanges();
  }

  listJuguete(): any {
    return this.fire.collection(this.juguetes).snapshotChanges();
  }

  getJuguete(id: string): any{
    return this.fire.collection(this.juguetes).doc(id).snapshotChanges();
  }

  getCliente(id: string): any{
    return this.fire.collection(this.clientes).doc(id).snapshotChanges();
  }
}
