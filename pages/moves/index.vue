<template>
  <div>
    <div>
      <div class="columns is-multiline mb-4">
        <div class="column is-narrow" v-for="(move, index) of moves" :key="index">
          <MoveCard :move="move"></MoveCard>
        </div>
      </div>
    </div>
    <div class="">
      <b-button type="is-primary" @click="getPreviousMoves">Previous</b-button>
      <b-button type="is-primary" outlined :disabled="moves.length !== 25" @click="getNextMoves">Next</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData (context) {
    const { store } = context
    await store.dispatch('moves/getMoves', context)
  },
  head () {
    return { title: 'Moves' }
  },
  computed: {
    moves () {
      return this.$store.state.moves.moves
    }
  },
  methods: {
    getNextMoves () {
      this.$store.dispatch('moves/getNextMoves', { $axios: this.$axios, error: this.error })
    },
    getPreviousMoves () {
      this.$store.dispatch('moves/getPreviousMoves', { $axios: this.$axios, error: this.error })
    }
  }
}
</script>

<style scoped>

</style>
