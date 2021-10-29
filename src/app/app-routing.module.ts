import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'daily',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'fus',
    loadChildren: () => import('./fus/fus.module').then( m => m.FusPageModule)
  },
  {
    path: 'daily',
    loadChildren: () => import('./daily/daily.module').then( m => m.DailyPageModule)
  },
  {
    path: 'fubykdticket/:kdticket',
    loadChildren: () => import('./fubykdticket/fubykdticket.module').then( m => m.FubykdticketPageModule)
  },
  {
    path: 'chatbykdticket/:kdticket/:imei',
    loadChildren: () => import('./chatbykdticket/chatbykdticket.module').then( m => m.ChatbykdticketPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
