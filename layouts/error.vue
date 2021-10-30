<template>
  <div class="error-container flex flex-col justify-center items-center">
    <h1 v-if="error && error.statusCode" class="text-6xl text-gray-500">{{ error.statusCode }}</h1>
    <h1 v-if="!error || !error.statusCode" class="text-6xl text-gray-500">500</h1>
    <h5 v-if="error && error.message" class="text-2xl text-gray-700">{{ error.message }}</h5>
    <h5  v-if="!error || !error.message" class="text-2xl text-gray-700">Something went wrong</h5>
  </div>
</template>

<script>
export default {
  name: 'Error',
  head () {
    return { title: this.error.statusCode }
  },
  props: ['error']
}
</script>

<style scoped>
.error-container {
  height: calc(100vh - 96px);
}
</style>
