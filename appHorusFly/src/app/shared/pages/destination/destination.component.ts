import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AccomodationsService } from 'src/app/routes/components/services/accomodations.service';
import { FlightsService } from 'src/app/routes/components/services/flights.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class DestinationComponent implements OnInit {
  form: FormGroup;
  formFly: FormGroup;
  router = inject(Router);
  acService = inject(AccomodationsService);
  flightsService = inject(FlightsService);

  resultsFilters = this.acService.resultsFilters;
  resultsFiltersFlights = this.flightsService.resultsFiltersFlights;

  serviceActual: any;
  tipo: 'hotel' | 'vuelo' = 'hotel';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
    this.formFly = this.fb.group({});
  }

  ngOnInit(): void {
    const url = this.router.url;

    if (url.includes('/accommodation')) {
      this.tipo = 'hotel';
      this.serviceActual = this.acService;
      this.form = this.fb.group({
        lugar: [''],
        precio: [''],
        rating: [''],
      });
    } else {
      if (url.includes('/')) {
        this.tipo = 'vuelo';
        this.serviceActual = this.flightsService;
        this.formFly = this.fb.group({
          aerolinea: [''],
          tipoViaje: [''],
          precio: [''],
        });
      }
    }

    this.form.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((filters) => this.acService.filterHotel$(filters)),
      )
      .subscribe((results) => {
        this.acService.resultsFilters.set(results);
      });

    this.formFly.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((filters) => this.flightsService.filtrarVuelos$(filters)),
      )
      .subscribe((results) => {
        this.flightsService.resultsFiltersFlights.set(results);
      });
  }

  removeFilters() {
    this.form.reset({
      lugar: '',
      precio: '',
      rating: '',
    });
  }
  removeFiltersFly() {
    this.formFly.reset({
      aerolinea: '',
      tipoViaje: '',
      precio: '',
    });
  }
}
