export interface Location {
  areas: Region[];
  gameIndices: GameIndex[];
  id: number;
  name: string;
  names: Name[];
  region: Region;
}

export interface Region {
  name: string;
  url: string;
}

export interface GameIndex {
  gameIndex: number;
  generation: Region;
}

export interface Name {
  language: Region;
  name: string;
}
