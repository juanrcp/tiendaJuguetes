import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  proveedores: string = 'proveedores';
  juguetes: string = 'juguetes';

  constructor(
    private fire: AngularFirestore
  ) { }

  listProveedor(): any {
    return this.fire.collection(this.proveedores).snapshotChanges();
  }

  listJuguete(): any {
    return this.fire.collection(this.juguetes).snapshotChanges();
  }
}
