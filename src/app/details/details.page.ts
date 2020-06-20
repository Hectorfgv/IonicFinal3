import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  id : string;
  producto: (IProducto|ITecnologia|IInmobiliaria|IMotor);

  constructor(private _activatedRoute: ActivatedRoute, private _productoService : ProductoService) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    let ref = this._productoService.getProducto(this.id);

    ref.once("value", snapshot=>{
      this.producto = snapshot.val();
  });

  }

}

