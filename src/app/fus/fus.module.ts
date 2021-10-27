import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FusPageRoutingModule } from './fus-routing.module';

import { FusPage } from './fus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FusPageRoutingModule
  ],
  declarations: [FusPage]
})
export class FusPageModule {}
