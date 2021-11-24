export interface GenerationsOverview {
  count: number;
  next: null;
  previous: null;
  results: GenerationOverview[];
}

export interface GenerationOverview {
  name: string;
  url: string;
}
