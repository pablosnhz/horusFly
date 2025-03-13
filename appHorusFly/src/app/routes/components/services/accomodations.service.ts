import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccomodationsService {
  constructor(private http: HttpClient) {}

  getInfo(): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoints.url}api/hotel/list`);
  }
}
