import { Component, OnInit } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  categoria: string;

  productos: (IProducto|ITecnologia|IInmobiliaria|IMotor)[] = [];

  constructor(private _toastCtrl : ToastController, private _productoService : ProductoService){}

  async presentToast(){
    const toast = await this._toastCtrl.create({
      message: 'Producto eliminado correctamente',
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  ngOnInit() {
    let ref = this._productoService.getProductos();

    ref.orderByChild("propietario").equalTo("EZWPdoS5rVdG4P54sRBV4YiNOgv1").once("value", snapshot => {
      snapshot.forEach(child => {
        this.productos.push(child.val());
      });
    }
    );
  }

  remove(id){
    let ref = this._productoService.getProducto(id);
    ref.remove();
    this.presentToast();
  }

  filter(categoria){
    this.categoria = categoria;
  }

}
