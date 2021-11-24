<template>
  <div>
    <div>
      <div class="columns is-multiline mb-4">
        <div class="column is-narrow" v-for="(stat, index) of stats" :key="index">
          <StatCard :stat="stat"></StatCard>
        </div>
      </div>
    </div>
    <div class="">
      <b-button type="is-primary" @click="getPreviousStats">Previous</b-button>
      <b-button type="is-primary" outlined :disabled="stats.length !== 25" @click="getNextStats">Next</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StatsOverview',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData (context) {
    const { store } = context
    await store.dispatch('stats/getStats', context)
  },
  head () {
    return { title: 'Stats' }
  },
  computed: {
    stats () {
      return this.$store.state.stats.stats
    }
  },
  methods: {
    getNextStats () {
      this.$store.dispatch('stats/getNextStats', { $axios: this.$axios, error: this.error })
    },
    getPreviousStats () {
      this.$store.dispatch('stats/getPreviousStats', { $axios: this.$axios, error: this.error })
    }
  }
}
</script>

<style scoped>

</style>
