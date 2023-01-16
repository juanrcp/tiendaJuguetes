import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  coleccion = 'proveedores';

  constructor(

    private firebase: AngularFirestore) { }

  getAllProveedor() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  getProveedor(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  updateProveedor(id: string, proveedor: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(proveedor);
  }

  addProveedor(proveedor: any): any{
    return this.firebase.collection(this.coleccion).add(proveedor);
  }

  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
