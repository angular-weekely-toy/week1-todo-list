import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {}

    /*
        API 기존 정보 : https://openweathermap.org/current
    */ 
    getWeather(targetCity: String): Observable<any[]>  {
        const params = new HttpParams().set('q','seoul').set('appid', environment.apiKey)
        try {
			return this.http.get<any>(environment.apiUrl, {params}).pipe();
		} catch (e) {
			console.log('eeee', e);
            throw new Error("Unexpected object: " + e);
		}
    }     
}