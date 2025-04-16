import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  http = inject(HttpClient);

  obtenerPackages(): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoints.url}api/combo/packagescombo`);
  }
  obtenerFlights(): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoints.url}api/combo/flycombo`);
  }
  obtenerDiscount(): Observable<any> {
    return this.http.get<any>(`${environment.apiEndpoints.url}api/combo/discountcombo`);
  }
}
