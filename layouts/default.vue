<template>
  <div class="flex flex-col h-full w-full">
    <nav class="px-8 flex flex-row justify-between items-center w-full h-16">
      <span class="text-2xl text-white font-bold">Pokemon Skilld!</span>
      <input v-model="pokemonSearchKeyword" @keyup="searchPokemon" class="search-input px-4" type="text">
      <span>Avatar</span>
    </nav>
    <div class="flex flex-col p-4 bg-gray-100">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      pokemonSearchKeyword: ''
    }
  },
  methods: {
    async searchPokemon (event) {
      if (event.key.toLowerCase() === 'enter') {
        await this.$router.push(`/pokemons/${this.pokemonSearchKeyword}`)
      }
    }
  }
}
</script>

<style scoped>
.search-input {
  width: 300px;
  height: 32px;
  border-radius: 16px;
}

nav {
 background: linear-gradient(to right,#18bc81,#18bcb7,#18bc81);
}
</style>
