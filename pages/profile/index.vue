<template>
  <div class="is-flex is-grow-1 is-justify-content-center">
    <div class="is-flex is-justify-content-center">
      <div class="box is-flex is-flex-direction-column is-align-items-center">
        <figure class="mb-3 image">
          <img class="is-rounded" :src="currentUser.picture" alt="picture" style="height: 128px; width: 128px">
        </figure>
        <div class="is-flex mb-3">
          <span class="has-text-grey-light">Naam:&nbsp;</span>
          <b>{{ currentUser.name }}</b>
        </div>
        <div class="is-flex mb-3">
          <span class="has-text-grey-light">Email:&nbsp;</span>
          <b>{{ currentUser.email }}</b>
        </div>
        <div class="mb-3">
          <b-button @click="copyToken" type="is-primary">Kopieer token</b-button>
        </div>
        <div>
          <pre>{{currentUser}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  computed: {
    currentUser () {
      return this.$auth.user
    },
    token () {
      return this.$auth.strategy.token.get().replace('Bearer ', '')
    }
  },
  methods: {
    copyToken () {
      navigator.clipboard.writeText(this.token)
    }
  }
}
</script>

<style scoped>

</style>
