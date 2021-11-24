<template>
  <div>
    <LoadingSpinner text="logging in ..."></LoadingSpinner>
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'index',
  methods: {
    login () {
      this.$auth.loginWith('auth0')
    }
  },
  mounted () {
    setTimeout(() => this.login(), 1000)
  }
}
</script>

<style scoped>

</style>
