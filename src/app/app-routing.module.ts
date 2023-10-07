import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { FiveDayForecastComponent } from './fivedays-weatherforecast/fivedays-weatherforecast.component';


const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'forecast', component: FiveDayForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
