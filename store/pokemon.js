import { Convert as CP } from '~/models/pokemons/pokemon'
import { Convert as CPD } from '~/models/pokemons/pokemon-detail'

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
  next (state) {
    state.pagination.offset += state.pagination.limit
  },
  previous (state) {
    if (state.pagination.offset !== 0) {
      state.pagination.offset -= state.pagination.limit
    }
  },
  setPokemons (state, pokemons) {
    state.pokemons = pokemons.map(pokemon => CP.toPokemon(JSON.stringify(pokemon)))
  },
  setPokemon (state, pokemon) {
    state.pokemon = CPD.toPokemonDetail(CPD.pokemonDetailToJson(pokemon))
  }
}

export const actions = {
  async getNextPokemons (context) {
    context.commit('next')
    await context.dispatch('getPokemons')
  },
  async getPreviousPokemons (context) {
    context.commit('previous')
    await context.dispatch('getPokemons')
  },
  async getPokemons (context) {
    await P.getPokemonsList({ limit: context.state.pagination.limit, offset: context.state.pagination.offset })
      .then((response) => {
        context.commit('setPokemons', response.results)
      })
  },
  async getPokemonByName (context, { pokemonName, error }) {
    await P.getPokemonByName(pokemonName)
      .then((response) => {
        return context.commit('setPokemon', response)
      })
      .catch(() => error({ message: `Pokemon with the name ${pokemonName} is not found`, statusCode: 404 }))
  }
}
