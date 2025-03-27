import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  $loading: WritableSignal<boolean> = signal(false);

  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    this.$loading.set(true);
    return this.http
      .get<any>(`${environment.apiEndpoints.url}api/flights/listfly`)
      .pipe(finalize(() => this.$loading.set(false)));
  }
}
