<template>
  <div>
    <LoadingSpinner text="redirecting ..."></LoadingSpinner>
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'index',
  mounted () {
    setTimeout(() => this.$router.push('/'), 1000)
  }
}
</script>

<style scoped>

</style>
