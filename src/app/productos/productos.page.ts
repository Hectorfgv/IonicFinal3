import { Component, OnInit } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor, IProductoUsuarios } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  oculto : boolean = false;

  rutaMotor : string = "../../assets/motor.jfif"

  productos: (IProducto|ITecnologia|IInmobiliaria|IMotor)[] = [];

  productosUsuarios: (IProductoUsuarios)[] = [];


constructor(private _toastCtrl : ToastController, private _productoService : ProductoService){}

ngOnInit(){
let ref = this._productoService.getProductos();

ref.on("value", snapshot => {
  snapshot.forEach(child =>{
    let value = child.val();
    this.productos.push(value);
    console.log("he encontrado: " +child.val().nombre)
  })
})
}

cambiar_oculto(){
  this.oculto = !this.oculto;
}

async presentToast(){
  const toast = await this._toastCtrl.create({
    message: 'Producto actualizado correctamente',
    duration: 2000,
    position: "top"
  });
  toast.present();
}

like(id) {

  let productoUsuario: (IProductoUsuarios)

  productoUsuario = {
    "idProducto" : id,
    "propietario": "EZWPdoS5rVdG4P54sRBV4YiNOgv1",
  }

  this._productoService.setProductoUsuarios(productoUsuario);
  this.presentToast();

  /*ref.once("value", snapshot => {
    if (snapshot.child("categoria").val() == "h") {
      ref.child("nombre").set(this.producto.nombre);
      ref.child("descripcion").set(this.producto.descripcion);
      ref.child("precio").set(this.producto.precio);
      this.presentToast();
    }

  }*/
}

dislike(id) {

  let ref = this._productoService.getProductosUsuarios();

  ref.orderByChild("idProducto").equalTo(id).once("value", snapshot => {
    this.productosUsuarios=[];
    snapshot.forEach(child => {
    let clave = child.key;
    ref.child(clave).remove();
    })
    });
    
  this.presentToast();
}




}
