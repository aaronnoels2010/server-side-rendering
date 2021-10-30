<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <h3 class="text-4xl mb-4">{{ pokemon.name }}</h3>
      <div class="flex flex-row flex-wrap">
        <div v-for="(sprite, index) of pokemon.sprites" :key="index" >
          <img v-if="sprite && typeof sprite !== 'object'" :src="sprite" alt="Sprite">
        </div>
      </div>
      <div>
        <h5 class="text-2xl mb-4">Abilities</h5>
        <div class="flex flex-wrap">
          <span class="rounded-full py-3 px-6 mr-4 mb-4 shadow-md" v-for="(ability, index) of pokemon.abilities" :key="index">{{ability.ability.name}}</span>
        </div>
      </div>
      <div>
        <h5 class="text-2xl mb-4">Moves</h5>
        <div class="flex flex-wrap">
          <span class="rounded-full py-3 px-6 mr-4 mb-4 shadow-md" v-for="(move, index) of pokemon.moves" :key="index">{{move.move.name}}</span>
        </div>
      </div>
      <div>
        <h5 class="text-2xl mb-4">Stats</h5>
        <div class="flex flex-wrap">
          <span class="rounded-full py-3 px-6 mr-4 mb-4 shadow-md" v-for="(stat, index) of pokemon.stats" :key="index">{{stat.stat.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PokemonDetail } from '~/models/pokemons/pokemon-detail';

export default Vue.extend({
  name: 'PokemonDetailPage',
  async asyncData ({ error, params, redirect, store }) {
    const pokemonName = params.name
    if (pokemonName) {
      await store.dispatch('pokemon/getPokemonByName', { pokemonName, error })
    } else {
      redirect('/pokemons')
    }
  },
  head () {
    return { title: this.$store.state.pokemon.pokemon.name }
  },
  computed: {
    pokemon (): PokemonDetail {
      console.log(this.$store.state.pokemon.pokemon)
      return this.$store.state.pokemon.pokemon
    }
  }
})
</script>

<style scoped>
</style>
