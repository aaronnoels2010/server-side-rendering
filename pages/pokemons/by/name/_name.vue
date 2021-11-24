<template>
  <div>
    <div>
      <h3 class="is-size-3 has-text-centered">{{ pokemon.name }}</h3>
      <div class="columns is-multiline m-0">
        <div class="column is-narrow mr-2" v-for="(sprite, index) of pokemon.sprites" :key="index" >
          <img v-if="sprite && typeof sprite !== 'object'" :src="sprite" alt="Sprite">
        </div>
      </div>
      <div>
        <h5 class="is-size-5">Abilities</h5>
        <div class="columns is-multiline m-0">
          <span class="column box is-narrow mb-2 mr-2" v-for="(ability, index) of pokemon.abilities" :key="index">{{ability.ability.name}}</span>
        </div>
      </div>
      <div>
        <h5 class="is-size-5">Moves</h5>
        <div class="columns is-multiline m-0">
          <span class="column box is-narrow mb-2 mr-2" v-for="(move, index) of pokemon.moves" :key="index">{{move.move.name}}</span>
        </div>
      </div>
      <div>
        <h5 class="is-size-5">Stats</h5>
        <div class="columns is-multiline m-0">
          <span class="column box is-narrow mb-2 mr-2" v-for="(stat, index) of pokemon.stats" :key="index">{{stat.stat.name}}</span>
        </div>
      </div>
      <div class="mt-2">
        <pre>{{ pokemon }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PokemonDetail } from '~/models/pokemons/pokemon-detail'

export default Vue.extend({
  name: 'PokemonDetailPage',
  async asyncData ({ error, params, redirect, store }) {
    const pokemonName = params.name
    if (pokemonName) {
      await store.dispatch('pokemon/getPokemonByNameAction', { pokemonName, error })
    } else {
      redirect('/pokemons')
    }
  },
  head () {
    return { title: this.$store.state.pokemon.pokemon.name }
  },
  computed: {
    pokemon (): PokemonDetail {
      return this.$store.state.pokemon.pokemon
    }
  }
})
</script>

<style scoped>
</style>
