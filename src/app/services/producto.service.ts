import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
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



    setProducto(producto: IProducto|ITecnologia|IInmobiliaria|IMotor){
      let ref = this._db.database.ref("productos");
      let insert = ref.push(producto);
      let productId = insert.key;
     
        
      ref.child(productId).child("id").set(productId);
      ref.child(productId).child("propietario").set("EZWPdoS5rVdG4P54sRBV4YiNOgv1");
    }

    
}