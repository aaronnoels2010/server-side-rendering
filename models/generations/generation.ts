export interface Generation {
  abilities: any[];
  id: number;
  mainRegion: MainRegion;
  moves: MainRegion[];
  name: string;
  names: Name[];
  pokemonSpecies: MainRegion[];
  types: MainRegion[];
  versionGroups: MainRegion[];
}

export interface MainRegion {
  name: string;
  url: string;
}

export interface Name {
  language: MainRegion;
  name: string;
}
