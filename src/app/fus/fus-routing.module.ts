import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FusPage } from './fus.page';

const routes: Routes = [
  {
    path: '',
    component: FusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FusPageRoutingModule {}
