import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoints.url}api/flights/listfly`);
  }
}
