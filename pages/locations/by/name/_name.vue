<template>
  <div>
    <pre>{{ location }}</pre>
  </div>
</template>

<script>
export default {
  name: 'index',
  async asyncData (context) {
    const { $axios, error, redirect, store, params } = context
    const locationName = params.name
    if (locationName) {
      await store.dispatch('locations/getLocationByNameAction', { $axios, locationName, error })
    } else {
      redirect('/locations')
    }
  },
  computed: {
    location () {
      return this.$store.state.locations.location
    }
  }
}
</script>

<style scoped>

</style>
