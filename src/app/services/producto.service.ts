import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor, IProductoUsuarios } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class ProductoService {

    productos: (IProducto|ITecnologia|IInmobiliaria|IMotor)[]= [];

      constructor(private _db: AngularFireDatabase){

      }

    getProductos(): firebase.database.Reference{
        let ref = this._db.database.ref("productos");
        return ref;
    }

    getProductosUsuarios(): firebase.database.Reference{
      let ref = this._db.database.ref("usuariosProductos");
      return ref;
  }

    getProducto(id){
      let ref = this._db.database.ref("productos/" + id);
      return ref;
  }


    setProductoUsuarios(producto: IProductoUsuarios){
      let ref = this._db.database.ref("usuariosProductos");
      ref.push(producto);

    }

    setProducto(producto: IProducto|ITecnologia|IInmobiliaria|IMotor){
      let ref = this._db.database.ref("productos");
      let insert = ref.push(producto);
      let productId = insert.key;
      /*ref.child(productId).set({
        id: productId,
        propietario: "EZWPdoS5rVdG4P54sRBV4YiNOgv1"
      });*/
        
      ref.child(productId).child("id").set(productId);
      ref.child(productId).child("propietario").set("EZWPdoS5rVdG4P54sRBV4YiNOgv1");
    }

    /*search(id: string){
      let ref = this._db.database.ref("productos");
      ref.orderByChild('propietario').equalTo(id).once("value", snapshot => {
        snapshot.forEach(child => {
          console.log("he encontrado "+child.val().nombre);
        })
      });
    }*/
}