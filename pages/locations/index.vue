<template>
  <div>
    <div>
      <div class="columns is-multiline mb-4">
        <div class="column is-narrow" v-for="(location, index) of locations" :key="index">
          <LocationCard :location="location"></LocationCard>
        </div>
      </div>
    </div>
    <div class="">
      <b-button type="is-primary" @click="getPreviousLocations">Previous</b-button>
      <b-button type="is-primary" outlined :disabled="locations.length !== 25" @click="getNextLocations">Next</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData (context) {
    const { store } = context
    await store.dispatch('locations/getLocations', context)
  },
  head () {
    return { title: 'Locations' }
  },
  computed: {
    locations () {
      return this.$store.state.locations.locations
    }
  },
  methods: {
    getNextLocations () {
      this.$store.dispatch('locations/getNextLocations', { $axios: this.$axios, error: this.error })
    },
    getPreviousLocations () {
      this.$store.dispatch('locations/getPreviousLocations', { $axios: this.$axios, error: this.error })
    }
  }
}
</script>

<style scoped>

</style>
