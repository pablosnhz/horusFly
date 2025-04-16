import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, finalize, map, Observable, tap } from 'rxjs';
import { IFlightFilters, IFlights } from 'src/app/core/models/flights';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  http = inject(HttpClient);
  $loading: WritableSignal<boolean> = signal(false);
  private filterSubject = new BehaviorSubject<IFlightFilters>({});
  filterFlight$ = this.filterSubject.asObservable();

  resultsFiltersFlights: WritableSignal<IFlights[]> = signal([]);

  allFlights: IFlights[] = [];

  getDatosFlights(): Observable<any> {
    this.$loading.set(true);
    return this.http.get<IFlights[]>(`${environment.apiEndpoints.url}api/flights/listfly`).pipe(
      tap((response) => {
        this.allFlights = response;
        console.log(`datos de vuelos`, response);
      }),
      finalize(() => this.$loading.set(false)),
    );
  }

  updateFilterFlights(filters: IFlightFilters) {
    this.filterSubject.next(filters);
  }

  filtrarVuelos$(filtros: IFlightFilters): Observable<IFlights[]> {
    return this.getDatosFlights().pipe(
      map((data) => {
        const vuelos = Array.isArray(data) ? data : data.value || [];
        return vuelos.filter((vuelo: IFlights) => {
          const cumplePlace =
            !filtros.aerolinea ||
            vuelo.airline?.toLowerCase().includes(filtros.aerolinea.toLowerCase());

          const cumpleTipoViaje =
            !filtros.tipoViaje ||
            (filtros.tipoViaje === '1' && !vuelo.toCity) ||
            (filtros.tipoViaje === '2' && vuelo.toCity);

          const cumplePrecio =
            !filtros.precio ||
            (filtros.precio === '1' && vuelo.price <= 200) ||
            (filtros.precio === '2' && vuelo.price > 200 && vuelo.price <= 300) ||
            (filtros.precio === '3' && vuelo.price > 400);

          return cumplePlace && cumplePrecio && cumpleTipoViaje;
        });
      }),
    );
  }
}
