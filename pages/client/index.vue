<template>
  <div>
    <h1 class="is-size-1">API Client</h1>
    <h3 class="is-size-3">Make a <span class="has-text-success">{{currentApiMethod}}</span> request to <span class="has-text-danger">{{apiBasePath}}{{searchKeyword}}</span></h3>
    <div class="is-flex">
      <div class="mr-4">
        <Dropdown @valueClicked="valueClicked" :items="apiMethods"></Dropdown>
      </div>
      <div class="is-flex-grow-1 mr-4">
        <input class="input" type="search" v-model="searchKeyword">
      </div>
      <b-button type="is-primary" @click="makeRequest">Send</b-button>
    </div>
    <div v-if="response" class="is-flex is-flex-direction-column mt-6">
      <div class="is-flex is-justify-content-end is-size-5 has-text-success">{{this.statusCode}}</div>
      <pre>{{response}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      currentApiMethod: '',
      apiBasePath: 'http://localhost:3000/api/',
      apiMethods: ['GET'],
      response: null,
      searchKeyword: '',
      statusCode: 0
    }
  },
  methods: {
    async makeRequest () {
      switch (this.currentApiMethod) {
        case 'GET':
          this.response = await this.$axios.get(`${this.searchKeyword}`)
            .then((response) => {
              this.statusCode = response.status
              return response.data
            })
      }
    },
    valueClicked (event) {
      this.currentApiMethod = event
    }
  }
}
</script>

<style scoped>

</style>
