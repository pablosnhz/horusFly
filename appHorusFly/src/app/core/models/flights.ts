export interface IFlights {
  idVuelo: number;
  airline: string;
  fromCity: string;
  toCity?: string | null;
  dateDeparture: string;
  dateReturn?: string | null;
  passengers: number;
  price: number;
  includes: string;
  suitcases: number;
  airplaneIcon: string;
  days: number | null;
}

export interface IFlightFilters {
  aerolinea?: string;
  tipoViaje?: string;
  precio?: string;
}
