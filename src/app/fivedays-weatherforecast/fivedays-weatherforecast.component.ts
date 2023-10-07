import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-fivedays-weatherforecast',
  templateUrl: './fivedays-weatherforecast.component.html',
  styleUrls: ['./fivedays-weatherforecast.component.css']
})
export class FiveDayForecastComponent {
  @Input() cityName: string = 'Myanmar';
  @Input() units: string = 'imperial';
  fiveDayForecast: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getFiveDayForecast();
  }

  getFiveDayForecast() {
    this.weatherService.getFiveDayForecast(this.cityName, this.units).subscribe({
      next: (res: any) => {
        console.log(res);
        // Filter the data to get only 5 days, each divided into 8 cards (3-hour intervals)
        this.fiveDayForecast = res.list
          .filter((item: any, index: number, array: any[]) => index % 8 === 0)
          .map((item: any) => {
            return {
              date: item.dt_txt,
              temperature: item.main.temp,
              feelsLikeTemp: item.main.feels_like,
              pressure: item.main.pressure,
              humidity: item.main.humidity,
              summary: item.weather[0].main
            };
          });
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    });
  }
}
