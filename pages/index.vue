<template>
  <div class="is-flex is-flex-direction-column is-align-items-center">
    <h1 class="is-size-1">Gotta catch them all</h1>
    <div class="is-flex">
      <div class="is-flex-grow-1 mr-4">
        <input class="input" type="search" v-model="keyword">
      </div>
      <b-button :disable="keyword" type="is-primary" @click="search">Search</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  auth: false,
  name: 'Home',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search (event: any) {
      event.target.className += ' is-loading'
      this.$axios.get(`/search?q=${this.keyword}`)
        .then(response => response.data)
        .then(data => this.$router.push(data.path))
        .finally(() => {
          event.target.className = event.target.className.replace(' is-loading', '')
        })
    }
  }
})
</script>
