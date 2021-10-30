<template>
  <div>
    <div class="flex flex-row flex-wrap justify-center">
      <div class="mr-4 mb-4" v-for="(pokemon, index) of pokemons" :key="index">
        <PokemonCard :pokemon="pokemon">
        </PokemonCard>
      </div>
    </div>
    <div class="flex flex-row justify-end">
      <button class="button-blue-outline" @click="getPreviousPokemons">Previous</button>
      <button class="ml-4 button-blue" :disabled="pokemons.length !== 25" @click="getNextPokemons">Next</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData ({ $auth, store }) {
    console.log($auth.loginWith)
    console.log($auth.loginWith('auth0'))
    await store.dispatch('pokemon/getPokemons')
  },
  head () {
    return { title: 'Pokemons' }
  },
  mounted () {
    this.$auth.loginWith('auth0')
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
