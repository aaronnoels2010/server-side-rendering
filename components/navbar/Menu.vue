<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item :key="index" v-for="(navItem, index) of navItems" :href="'/' + navItem.name">
        {{navItem.name}}
      </b-navbar-item>
    </template>

    <template #end>
      <NavbarAuth></NavbarAuth>
      <Alerts></Alerts>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      navItems: []
    }
  },
  async fetch () {
    if (this.navItems.length === 0 || (Date.now() - this.$fetchState.timestamp) < 3600000) {
      this.navItems = await this.$axios.get('/configuration').then(response => response.data)
    }
    console.log(Date.now() - this.$fetchState.timestamp)
  }
}
</script>

<style scoped>

</style>
