import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'aee24f7df60e724801b74f26995df851'; 

  constructor(private http: HttpClient) { }

  getWeather(city: string, units: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=${units}`;
    return this.http.get(apiUrl);
  }

  getFiveDayForecast(city: string, units: string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=${units}`;
    return this.http.get(apiUrl);
  }
}
