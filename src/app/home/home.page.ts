import { Component } from '@angular/core';

import { ProductoService } from '../services/producto.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

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

}
