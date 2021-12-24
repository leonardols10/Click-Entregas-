import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGastosPage } from './add-gastos.page';

const routes: Routes = [
  {
    path: '',
    component: AddGastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGastosPageRoutingModule {}
