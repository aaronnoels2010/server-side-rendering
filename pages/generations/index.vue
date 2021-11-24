<template>
  <div>
    <div>
      <div class="columns is-multiline mb-4">
        <div class="column is-narrow" v-for="(generation, index) of generations" :key="index">
          <GenerationCard :generation="generation"></GenerationCard>
        </div>
      </div>
    </div>
    <div class="">
      <b-button type="is-primary" @click="getPreviousGenerations">Previous</b-button>
      <b-button type="is-primary" outlined :disabled="generations.length !== 25" @click="getNextGenerations">Next</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData (context) {
    const { store } = context
    await store.dispatch('generations/getGenerations', context)
  },
  head () {
    return { title: 'Generations' }
  },
  computed: {
    generations () {
      return this.$store.state.generations.generations
    }
  },
  methods: {
    getNextGenerations () {
      this.$store.dispatch('generations/getNextGenerations', { $axios: this.$axios, error: this.error })
    },
    getPreviousGenerations () {
      this.$store.dispatch('generations/getPreviousGenerations', { $axios: this.$axios, error: this.error })
    }
  }
}
</script>

<style scoped>

</style>
