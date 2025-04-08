import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, delay, finalize, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccomodationsService {
  $loading: WritableSignal<boolean> = signal(false);
  private filterSubject = new BehaviorSubject<any>({});
  filter$ = this.filterSubject.asObservable();

  resultsFilters: WritableSignal<any[]> = signal([]);

  allHotels: any[] = [];

  constructor(private http: HttpClient) {}

  getInfoHotel(): Observable<any> {
    this.$loading.set(true);
    return this.http.get<any>(`${environment.apiEndpoints.url}api/hotel/list`).pipe(
      tap((response) => {
        this.allHotels = response;
      }),
      finalize(() => this.$loading.set(false)),
    );
  }

  updateFilter(filters: any) {
    this.filterSubject.next(filters);
  }

  filterHotel$(filters: any): Observable<any[]> {
    return this.getInfoHotel().pipe(
      map((data) => {
        const hotel = Array.isArray(data) ? data : data.value || [];
        return hotel.filter((place: any) => {
          const placeCheck =
            !filters.lugar || place.city?.toLowerCase().includes(filters.lugar.toLowerCase());
          const priceCheck =
            !filters.precio ||
            (filters.precio === '1' && place.price <= 100) ||
            (filters.precio === '2' && place.price > 100 && place.price <= 200) ||
            (filters.precio === '3' && place.price > 300);
          const ratingCheck = !filters.rating || place.rating == filters.rating;

          return placeCheck && priceCheck && ratingCheck;
        });
      }),
    );
  }
}
