<template>
  <div @click="goToAbilityDetails" class="box">
    <span>{{ ability.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['ability'],
  methods: {
    async goToAbilityDetails () {
      await this.$router.push(`/abilities/by/name/${this.ability.name}`)
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
