import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FubykdticketPageRoutingModule } from './fubykdticket-routing.module';

import { FubykdticketPage } from './fubykdticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FubykdticketPageRoutingModule
  ],
  declarations: [FubykdticketPage]
})
export class FubykdticketPageModule {}
