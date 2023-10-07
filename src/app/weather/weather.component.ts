import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  cityName: string = 'Myanmar'; // Define cityName for ngModel binding
  units: string = 'imperial'; // Change this to 'metric' if you prefer metric units

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.cityName, this.units).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;

        this.iconURL = "https://openweathermap.org/img/wn/" + this.myWeather.weather[0].icon +  "@2x.png";
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    });
  }

  onRadioButtonChange() {
    if (this.units == 'imperial') {
      this.units = 'metric';
    } else {
      this.units = 'imperial';
    }

    this.getWeather();
  }

  resetWeather() {
    // Reset weather data to default values
    this.temperature = 0;
    this.feelsLikeTemp = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.summary = '';
    this.iconURL = '';
    this.cityName = ''; // Clear the input field
  }
}
