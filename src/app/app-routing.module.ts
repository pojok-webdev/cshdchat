import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';
import { SearchticketComponent } from './searchticket/searchticket.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:'main',component:MainComponent
  },
  {path:'search',
  //loadChildren:()=>import('./searchticket/searchticket.component').then(m=>m.SearchticketComponent)
  component:SearchticketComponent
  },
{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
    {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'daily',
    pathMatch: 'full'
  },
  {path:'lazy',
  component:LazyComponent
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
    path: 'chatbykdticket/:kdticket',
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
