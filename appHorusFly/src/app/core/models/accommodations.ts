export interface IAccommodations {
  idVuelo: number;
  airline: string;
  fromCity: string;
  toCity: string;
  dateDeparture: string;
  dateReturn: string;
  passengers: number;
  price: number;
  includes: string;
  suitcases: number;
  airplaneIcon: string;
  days: number;
}

export interface IAccommodationsFilters {
  lugar?: string;
  precio?: string;
  rating?: string;
}
