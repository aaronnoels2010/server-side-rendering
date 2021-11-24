export interface Ability {
  effectChanges: EffectChange[];
  effectEntries: AbilityEffectEntry[];
  flavorTextEntries: FlavorTextEntry[];
  generation: Generation;
  id: number;
  isMainSeries: boolean;
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}

export interface EffectChange {
  effectEntries: EffectChangeEffectEntry[];
  versionGroup: Generation;
}

export interface EffectChangeEffectEntry {
  effect: string;
  language: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface AbilityEffectEntry {
  effect: string;
  language: Generation;
  shortEffect: string;
}

export interface FlavorTextEntry {
  flavorText: string;
  language: Generation;
  versionGroup: Generation;
}

export interface Name {
  language: Generation;
  name: string;
}

export interface Pokemon {
  isHidden: boolean;
  pokemon: Generation;
  slot: number;
}
