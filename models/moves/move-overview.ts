export interface MovesOverview {
  count: number;
  next: string;
  previous: null;
  results: MoveOverview[];
}

export interface MoveOverview {
  name: string;
  url: string;
}
