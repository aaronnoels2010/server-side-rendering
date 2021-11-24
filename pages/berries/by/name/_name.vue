<template>
  <div>
    <pre>{{ berry }}</pre>
  </div>
</template>

<script>
export default {
  name: 'index',
  async asyncData (context) {
    const { $axios, error, redirect, store, params } = context
    const berryName = params.name
    if (berryName) {
      await store.dispatch('berries/getBerrieByNameAction', { $axios, berryName, error })
    } else {
      redirect('/berries')
    }
  },
  computed: {
    berry () {
      return this.$store.state.berries.berry
    }
  }
}
</script>

<style scoped>

</style>
