<template>
  <div @click="goToPokemonDetails" class="box">
    <span>{{ pokemon.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['pokemon'],
  methods: {
    async goToPokemonDetails () {
      await this.$router.push(`/pokemons/by/name/${this.pokemon.name}`)
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
