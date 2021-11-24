<template>
  <div>
    <pre>{{ generation }}</pre>
  </div>
</template>

<script>
export default {
  name: 'index',
  async asyncData (context) {
    const { $axios, error, redirect, store, params } = context
    const generationName = params.name
    if (generationName) {
      await store.dispatch('generations/getGenerationByNameAction', { $axios, generationName, error })
    } else {
      redirect('/generations')
    }
  },
  computed: {
    generation () {
      return this.$store.state.generations.generation
    }
  }
}
</script>

<style scoped>

</style>
