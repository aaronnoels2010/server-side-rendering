<template>
  <div @click="goToMoveDetails" class="box">
    <span>{{ move.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['move'],
  methods: {
    async goToMoveDetails () {
      await this.$router.push(`/moves/by/name/${this.move.name}`)
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
