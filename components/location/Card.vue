<template>
  <div @click="goToLocationDetails" class="box">
    <span>{{ location.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['location'],
  methods: {
    async goToLocationDetails () {
      await this.$router.push(`/locations/by/name/${this.location.name}`)
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
