<template>
  <div>
    <div>
      <div class="columns is-multiline mb-4">
        <div class="column is-narrow" v-for="(ability, index) of abilities" :key="index">
          <AbilityCard :ability="ability"></AbilityCard>
        </div>
      </div>
    </div>
    <div class="">
      <b-button type="is-primary" @click="getPreviousAbilities">Previous</b-button>
      <b-button type="is-primary" outlined :disabled="abilities.length !== 25" @click="getNextAbilities">Next</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Abilities',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData (context) {
    const { store } = context
    await store.dispatch('abilities/getAbilities', context)
  },
  head () {
    return { title: 'Abilities' }
  },
  computed: {
    abilities () {
      return this.$store.state.abilities.abilities
    }
  },
  methods: {
    getNextAbilities () {
      this.$store.dispatch('abilities/getNextAbilities', { $axios: this.$axios, error: this.error })
    },
    getPreviousAbilities () {
      this.$store.dispatch('abilities/getPreviousAbilities', { $axios: this.$axios, error: this.error })
    }
  }
}
</script>

<style scoped>

</style>
