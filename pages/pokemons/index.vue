<template>
  <div>
    <div>
      <div class="columns is-multiline mb-4">
        <div class="column is-narrow" v-for="(pokemon, index) of pokemons" :key="index">
          <PokemonCard :pokemon="pokemon"></PokemonCard>
        </div>
      </div>
    </div>
    <div class="">
      <b-button type="is-primary" @click="getPreviousPokemons">Previous</b-button>
      <b-button type="is-primary" outlined :disabled="pokemons.length !== 25" @click="getNextPokemons">Next</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData ({ $auth, store }) {
    await store.dispatch('pokemon/getPokemons')
  },
  head () {
    return { title: 'Pokemons' }
  },
  computed: {
    pokemons () {
      return this.$store.state.pokemon.pokemons
    }
  },
  methods: {
    getNextPokemons () {
      this.$store.dispatch('pokemon/getNextPokemons')
    },
    getPreviousPokemons () {
      this.$store.dispatch('pokemon/getPreviousPokemons')
    }
  }
}
</script>

<style scoped>

</style>
