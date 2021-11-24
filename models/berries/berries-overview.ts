export interface BerriesOverview {
  count: number;
  next: null;
  previous: null;
  results: BerryOverview[];
}

export interface BerryOverview {
  name: string;
  url: string;
}
