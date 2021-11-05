import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherService } from '../service/weather.service'

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css'],
  providers: [WeatherService],
})
export class WeatherFormComponent implements OnInit {
  constructor(private weatherService: WeatherService, private route: ActivatedRoute, private router: Router) { 
  }

  weatherData?: any[];
  ngOnInit(): void {
    this.getWeatherInfo()
  }

  getWeatherInfo() {
    this.weatherService.getWeather('seoul')
    .toPromise()
    .then((res: any) => {
      this.weatherData = res?.weather;
      console.log(this.weatherData);
    });
  }
    

}
