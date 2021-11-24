<template>
  <b-navbar-item tag="div">
    <div v-if="!loggedIn" class="buttons">
      <b-button type="is-primary" @click="login">
        <strong>Sign up</strong>
      </b-button>
      <b-button type="is-light" @click="login">
        Log in
      </b-button>
    </div>
    <div v-if="loggedIn" class="is-flex is-align-items-center">
      <a class="is-size-6 mr-3" href="/profile">{{ currentUser.name }}</a>
      <b-button type="is-primary" @click="logout">
        Log out
      </b-button>
    </div>
  </b-navbar-item>
</template>

<script>

export default {
  name: 'Auth',
  data () {
    return {
      authModalId: 'authModalId'
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.loggedIn
    },
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    async logout () {
      await this.$router.push('/logout')
    },
    async login () {
      await this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
