// To parse this data:
//
//   import { Convert, Pokemon } from "./file";
//
//   const pokemon = Convert.toPokemon(json);

export interface Pokemon {
  name?: string;
  url?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPokemon (json: string): Pokemon {
    return JSON.parse(json)
  }

  public static pokemonToJson (value: Pokemon): string {
    return JSON.stringify(value)
  }
}
