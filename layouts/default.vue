<template>
  <div id="root" class="is-flex is-flex-direction-column">
    <div>
      <NavbarMenu></NavbarMenu>
    </div>
    <div class="is-flex-grow-1 m-4">
      <div class="container">
        <Nuxt></Nuxt>
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
  layout: 'main'
}
</script>

<style scoped>
#root {
  min-height: 100vh;
}
</style>
