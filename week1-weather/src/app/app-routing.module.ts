import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherFormComponent } from './weather-form/weather-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
