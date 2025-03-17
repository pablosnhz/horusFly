import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccomodationsService {
  $loading: WritableSignal<boolean> = signal(false);

  constructor(private http: HttpClient) {}

  getInfo(): Observable<any> {
    this.$loading.set(true);
    return this.http.get<any>(`${environment.apiEndpoints.url}api/hotel/list`).pipe(
      // delay(3000),
      finalize(() => this.$loading.set(false)),
    );
  }
}
