import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {}

    /*
        https://openweathermap.org/current
    */ 
    getWeather(targetCity: String): Observable<any[]>  {
        // const params = new HttpParams()
        // .set('q','seoul').set('appid', environment.apiKey)
        const url: string = environment.apiUrl+'?q=seoul&appid='+environment.apiKey;
        console.log('url ' + url);
        try {
			return this.http.get<any>(url).pipe();
		} catch (e) {
			console.log('eeee', e);
            throw new Error("Unexpected object: " + e);
		}
    }     
}