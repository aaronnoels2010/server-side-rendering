<template>
  <div @click="goToBerryDetails" class="box">
    <span>{{ berry.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['berry'],
  methods: {
    async goToBerryDetails () {
      await this.$router.push(`/berries/by/name/${this.berry.name}`)
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
