<template>
  <div>
    <pre>{{ stat }}</pre>
  </div>
</template>

<script>
export default {
  name: 'index',
  async asyncData (context) {
    const { $axios, error, redirect, store, params } = context
    const statName = params.name
    if (statName) {
      await store.dispatch('stats/getStatByNameAction', { $axios, statName, error })
    } else {
      redirect('/stats')
    }
  },
  computed: {
    stat () {
      return this.$store.state.stats.stat
    }
  }
}
</script>

<style scoped>

</style>
