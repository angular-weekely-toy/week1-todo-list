import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/41';

  constructor(private http: HttpClient) {}

  getCurrentConditions() {
    const params = {
      apikey: 'KaLFyekOBNaEihSweVYzvsAClV5BQJ74',
      language: 'ko-kr',
    };
    return this.http
      .get(this.baseUrl, {
        params,
      })
      .pipe(map((res: any) => res[0]?.WeatherText));
  }
}
