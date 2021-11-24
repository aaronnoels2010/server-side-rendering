export interface LocationsOverview {
  count: number;
  next: string;
  previous: null;
  results: LocationOverview[];
}

export interface LocationOverview {
  name: string;
  url: string;
}
