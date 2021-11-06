import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './page/main-view/main-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  {
    path: 'todolist',
    component: MainViewComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'todolist',
  //   pathMatch: 'full',
  // },
  // { path: '404', component: P404Component },
  // { path: '500', component: P500Component },
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   children: [
  //     {
  //       path: 'todolist',
  //       loadChildren: () => import('./views/db/db.module').then(m => m.DbModule)
  //     },
  //   ],
  // },
  // { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
