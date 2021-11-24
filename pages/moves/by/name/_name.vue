<template>
  <div>
    <pre>{{ move }}</pre>
  </div>
</template>

<script>
export default {
  name: 'index',
  async fetch (context) {
    const { $axios, error, redirect, store, params } = context
    const moveName = params.name
    if (moveName) {
      await store.dispatch('moves/getMoveByNameAction', { $axios, moveName, error })
    } else {
      redirect('/moves')
    }
  },
  computed: {
    move () {
      return this.$store.state.moves.move
    }
  }
}
</script>

<style scoped>

</style>
