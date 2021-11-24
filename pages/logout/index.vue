<template>
  <div>
    <LoadingSpinner text="logging out ..."></LoadingSpinner>
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'index',
  computed: {
    loggedIn () {
      return this.$store.state.auth.loggedIn
    }
  },
  mounted () {
    if (this.loggedIn) {
      setTimeout(() => this.logout(), 1000)
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>
</style>
