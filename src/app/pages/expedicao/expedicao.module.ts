import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpedicaoPageRoutingModule } from './expedicao-routing.module';

import { ExpedicaoPage } from './expedicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpedicaoPageRoutingModule
  ],
  declarations: [ExpedicaoPage]
})
export class ExpedicaoPageModule {}
