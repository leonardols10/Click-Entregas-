import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGastosPageRoutingModule } from './add-gastos-routing.module';

import { AddGastosPage } from './add-gastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGastosPageRoutingModule
  ],
  declarations: [AddGastosPage]
})
export class AddGastosPageModule {}
