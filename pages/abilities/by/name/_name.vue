<template>
  <div>
    <pre>{{ ability }}</pre>
  </div>
</template>

<script>
export default {
  name: 'index',
  async asyncData (context) {
    const { $axios, error, redirect, store, params } = context
    const abilityName = params.name
    if (abilityName) {
      await store.dispatch('abilities/getAbilityByNameAction', { $axios, abilityName, error })
    } else {
      redirect('/abilities')
    }
  },
  computed: {
    ability () {
      return this.$store.state.abilities.ability
    }
  }
}
</script>

<style scoped>

</style>
