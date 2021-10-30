<template>
  <div @click="goToPokemonDetails" class="flex flex-col justify-center items-center shadow-md pokemon-card__container hover:shadow-xl">
    <span>{{ pokemon.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: ['pokemon'],
  methods: {
    async goToPokemonDetails () {
      await this.$router.push(`/pokemons/${this.pokemon.name}`)
    }
  }
}
</script>

<style scoped>
.pokemon-card__container {
  height: 150px;
  width: 250px;
}
</style>
