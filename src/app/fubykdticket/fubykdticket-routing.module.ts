import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FubykdticketPage } from './fubykdticket.page';

const routes: Routes = [
  {
    path: '',
    component: FubykdticketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FubykdticketPageRoutingModule {}
