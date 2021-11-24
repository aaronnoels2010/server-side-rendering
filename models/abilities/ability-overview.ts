export interface AbilitiesOverview {
  count: number;
  next: string;
  previous: null;
  results: AbilityOverview[];
}

export interface AbilityOverview {
  name: string;
  url: string;
}
