import { Pokemon } from '~/models/pokemons/pokemon'
import { PokemonDetail } from '~/models/pokemons/pokemon-detail'

const Pokedex = require('pokedex-promise-v2')
const P = new Pokedex()

export const state = function () {
  return {
    pagination: {
      limit: 25,
      offset: 0
    },
    pokemons: [],
    pokemon: undefined
  }
}

export const mutations = {
  next (state: any) {
    state.pagination.offset += state.pagination.limit
  },
  previous (state: any) {
    if (state.pagination.offset !== 0) {
      state.pagination.offset -= state.pagination.limit
    }
  },
  setPokemons (state: any, pokemons: Pokemon[]) {
    state.pokemons = pokemons
  },
  setPokemon (state: any, pokemon: PokemonDetail) {
    state.pokemon = pokemon
  }
}

export const actions = {
  async getNextPokemons (context: any) {
    context.commit('next')
    await context.dispatch('getPokemons')
  },
  async getPreviousPokemons (context: any) {
    context.commit('previous')
    await context.dispatch('getPokemons')
  },
  async getPokemons (context: any) {
    await P.getPokemonsList({ limit: context.state.pagination.limit, offset: context.state.pagination.offset })
      .then((response: any) => {
        context.commit('setPokemons', response.results)
      })
  },
  async getPokemonByNameAction (context: any, { pokemonName, error }: {pokemonName: string, error: any}) {
    await P.getPokemonByName(pokemonName)
      .then((response: any) => {
        return context.commit('setPokemon', response)
      })
      .catch(() => error({ message: `Pokemon with the name ${pokemonName} is not found`, statusCode: 404 }))
  }
}
