import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { AppRoutingModule } from './app-routing.module';
import { FiveDayForecastComponent } from './fivedays-weatherforecast/fivedays-weatherforecast.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FiveDayForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule // Import AppRoutingModule to enable routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
