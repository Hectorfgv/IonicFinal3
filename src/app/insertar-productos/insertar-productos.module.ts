import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarProductosPageRoutingModule } from './insertar-productos-routing.module';

import { InsertarProductosPage } from './insertar-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarProductosPageRoutingModule
  ],
  declarations: [InsertarProductosPage]
})
export class InsertarProductosPageModule {}
