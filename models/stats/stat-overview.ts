export interface StatsOverview {
  count: number;
  next: null;
  previous: null;
  results: StatOverview[];
}

export interface StatOverview {
  name: string;
  url: string;
}
