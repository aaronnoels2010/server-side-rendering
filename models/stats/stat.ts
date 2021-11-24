export interface Stat {
  affectingMoves: AffectingMoves;
  affectingNatures: AffectingNatures;
  characteristics: Characteristic[];
  gameIndex: number;
  id: number;
  isBattleOnly: boolean;
  moveDamageClass: MoveDamageClass;
  name: string;
  names: Name[];
}

export interface AffectingMoves {
  decrease: Crease[];
  increase: Crease[];
}

export interface Crease {
  change: number;
  move: MoveDamageClass;
}

export interface MoveDamageClass {
  name: string;
  url: string;
}

export interface AffectingNatures {
  decrease: MoveDamageClass[];
  increase: MoveDamageClass[];
}

export interface Characteristic {
  url: string;
}

export interface Name {
  language: MoveDamageClass;
  name: string;
}
