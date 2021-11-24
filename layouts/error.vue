<template>
  <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
    <img src="~/assets/icons/error.png" alt="error image">
    <h3 v-if="error && error.message" class="is-size-3 bold">{{ error.message }}</h3>
    <h3  v-if="!error || !error.message" class="is-size-3 bold">Something went wrong</h3>
    <div>
      <b-button type="is-primary" @click="refresh">Refresh</b-button>
      <b-button type="is-ghost" @click="goToHome">Go to home</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  head () {
    return { title: this.error.statusCode }
  },
  mounted () {
    console.error(`${this.error.statusCode}
    ${this.error.path}
    ${this.error.message}`)
  },
  props: ['error'],
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    async refresh () {
      await this.$router.push(this.$route.path)
    }
  }
}
</script>

<style scoped>
.bold {
  color: red;
  font-weight: bold;
}
</style>
