export interface Berry {
  firmness: Firmness;
  flavors: Flavor[];
  growthTime: number;
  id: number;
  item: Firmness;
  maxHarvest: number;
  name: string;
  naturalGiftPower: number;
  naturalGiftType: Firmness;
  size: number;
  smoothness: number;
  soilDryness: number;
}

export interface Firmness {
  name: string;
  url: string;
}

export interface Flavor {
  flavor: Firmness;
  potency: number;
}
