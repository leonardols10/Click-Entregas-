import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpedicaoPage } from './expedicao.page';

const routes: Routes = [
  {
    path: '',
    component: ExpedicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpedicaoPageRoutingModule {}
