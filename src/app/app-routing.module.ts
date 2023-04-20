import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { DashboardHeadComponent } from './dashboard-head/dashboard-head.component';
import { Top10Component } from './top10/top10.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: DashboardHeadComponent},
  {path: 'breeds/:id', component: BreedsComponent},
  {path: 'top10', component: Top10Component },
  {path: 'dashboard', redirectTo:'/', pathMatch:'full'},
  {path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
