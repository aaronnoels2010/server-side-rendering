<template>
  <div @click="goToGenerationDetails" class="box">
    <span>{{ generation.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['generation'],
  methods: {
    async goToGenerationDetails () {
      await this.$router.push(`/generations/by/name/${this.generation.name}`)
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
