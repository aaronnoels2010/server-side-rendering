export interface Move {
  accuracy: null;
  contestCombos: null;
  contestEffect: ContestEffect;
  contestType: ContestType;
  damageClass: ContestType;
  effectChance: null;
  effectChanges: EffectChange[];
  effectEntries: MoveEffectEntry[];
  flavorTextEntries: FlavorTextEntry[];
  generation: ContestType;
  id: number;
  learnedByPokemon: ContestType[];
  machines: Machine[];
  meta: Meta;
  name: string;
  names: Name[];
  pastValues: PastValue[];
  power: null;
  pp: number;
  priority: number;
  statChanges: any[];
  superContestEffect: ContestEffect;
  target: ContestType;
  type: ContestType;
}

export interface ContestEffect {
  url: string;
}

export interface ContestType {
  name: string;
  url: string;
}

export interface EffectChange {
  effectEntries: EffectChangeEffectEntry[];
  versionGroup: ContestType;
}

export interface EffectChangeEffectEntry {
  effect: string;
  language: ContestType;
}

export interface MoveEffectEntry {
  effect: string;
  language: ContestType;
  shortEffect: string;
}

export interface FlavorTextEntry {
  flavorText: string;
  language: ContestType;
  versionGroup: ContestType;
}

export interface Machine {
  machine: ContestEffect;
  versionGroup: ContestType;
}

export interface Meta {
  ailment: ContestType;
  ailmentChance: number;
  category: ContestType;
  critRate: number;
  drain: number;
  flinchChance: number;
  healing: number;
  maxHits: null;
  maxTurns: null;
  minHits: null;
  minTurns: null;
  statChance: number;
}

export interface Name {
  language: ContestType;
  name: string;
}

export interface PastValue {
  accuracy: number;
  effectChance: null;
  effectEntries: any[];
  power: null;
  pp: null;
  type: null;
  versionGroup: ContestType;
}
