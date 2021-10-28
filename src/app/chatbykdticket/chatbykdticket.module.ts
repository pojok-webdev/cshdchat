import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbykdticketPageRoutingModule } from './chatbykdticket-routing.module';

import { ChatbykdticketPage } from './chatbykdticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbykdticketPageRoutingModule
  ],
  declarations: [ChatbykdticketPage]
})
export class ChatbykdticketPageModule {}
