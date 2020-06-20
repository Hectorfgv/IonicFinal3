import { Component } from '@angular/core';
import { IProductoUsuarios } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productosUsuarios: (IProductoUsuarios)[] = [];

constructor(private _toastCtrl : ToastController,private _productoService : ProductoService){}

async presentToast(total){
  const toast = await this._toastCtrl.create({
    message: `Actualmente te gustan ${total} productos`,
    duration: 2000,
    position: "top"
  });
  toast.present();
}

ngOnInit(){
}

countLikes(user){
  let ref = this._productoService.getProductosUsuarios();

  ref.orderByChild("propietario").equalTo(user).once("value", snapshot => {
    this.productosUsuarios = [];
    snapshot.forEach(child => {
      let value = child.val();
      this.productosUsuarios.push(value);
    });
    let total = this.productosUsuarios.length;
    this.presentToast(total);

  }
  );

}



}
