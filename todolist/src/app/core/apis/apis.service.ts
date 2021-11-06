import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private http: HttpClient,
  ) { }


  private formatErrors(error: any) {
    return throwError(error.error);
  }
  
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log('API Service --> path :' + path + ' // params : ' + params);
    return this.http.get(`${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
}
