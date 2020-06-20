import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarProductosPage } from './insertar-productos.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarProductosPageRoutingModule {}
