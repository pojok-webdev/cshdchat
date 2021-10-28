import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatbykdticketPage } from './chatbykdticket.page';

const routes: Routes = [
  {
    path: '',
    component: ChatbykdticketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbykdticketPageRoutingModule {}
