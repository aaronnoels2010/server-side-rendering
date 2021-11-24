<template>
  <div>
    <div>
      <div class="columns is-multiline mb-4">
        <div class="column is-narrow" v-for="(berry, index) of berries" :key="index">
          <BerryCard :berry="berry"></BerryCard>
        </div>
      </div>
    </div>
    <div class="">
      <b-button type="is-primary" @click="getPreviousBerries">Previous</b-button>
      <b-button type="is-primary" outlined :disabled="berries.length !== 25" @click="getNextBerries">Next</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Berries',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData (context) {
    const { store } = context
    await store.dispatch('berries/getBerries', context)
  },
  head () {
    return { title: 'Berries' }
  },
  computed: {
    berries () {
      return this.$store.state.berries.pokemons
    }
  },
  methods: {
    getNextBerries () {
      this.$store.dispatch('berries/getNextBerries', { $axios: this.$axios, error: this.error })
    },
    getPreviousBerries () {
      this.$store.dispatch('berries/getPreviousBerries', { $axios: this.$axios, error: this.error })
    }
  }
}
</script>

<style scoped>

</style>
