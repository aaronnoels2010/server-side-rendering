<template>
  <div @click="goToStatDetails" class="box">
    <span>{{ stat.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['stat'],
  methods: {
    async goToStatDetails () {
      await this.$router.push(`/stats/by/name/${this.stat.name}`)
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
