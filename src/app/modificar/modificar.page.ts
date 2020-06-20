import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITecnologia, IInmobiliaria, IMotor, IProducto } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  id: string;
  producto: (IProducto & ITecnologia & IInmobiliaria & IMotor) = { "id":"","nombre": "","descripcion": "","categoria": "",
   "propietario": "",  "precio": 0, "estado": "", "metrosCuadrados": 0, "numeroHabitaciones": 0, "numeroBanyos": 0,
    "localidad": "","tipo": "", "km": 0, "anyo": 0}

  constructor(private _toastCtrl : ToastController, private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  async presentToast(){
    const toast = await this._toastCtrl.create({
      message: 'Producto actualizado',
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  modificar(idProducto) {


    let ref = this._productoService.getProducto(idProducto);

    ref.once("value", snapshot => {
      if (snapshot.child("categoria").val() == "hogar") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        this.presentToast();
      }

      if (snapshot.child("categoria").val() == "tecnologia") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        ref.child("estado").set(this.producto.estado);
        this.presentToast();
      }

      if (snapshot.child("categoria").val() == "inmobiliaria") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        ref.child("metrosCuadrados").set(this.producto.metrosCuadrados);
        ref.child("numeroHabitaciones").set(this.producto.numeroHabitaciones);
        ref.child("numeroBanyos").set(this.producto.numeroBanyos);
        ref.child("localidad").set(this.producto.localidad);
        this.presentToast();
      }

      if (snapshot.child("categoria").val() == "motor") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        ref.child("tipo").set(this.producto.tipo);
        ref.child("km").set(this.producto.km);
        ref.child("anyo").set(this.producto.anyo);
        this.presentToast();
      }
    }

    );
  }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    let ref = this._productoService.getProducto(this.id);
    ref.once("value", snapshot => {
      this.producto = snapshot.val();
    });
  }

}