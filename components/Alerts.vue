<template>
  <div id="alert-container">
    <div class="is-flex is-flex-direction-column">
      <div v-for="(alert, index) of alerts" :key="index" :class="'notification ' + alert.class">
        <button @click="removeAlert(alert.type)" class="delete"></button>
        {{alert.message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alerts',
  computed: {
    alerts () {
      return this.$store.state.alerts.alerts
    }
  },
  methods: {
    removeAlert (type) {
      this.$store.commit('alerts/removeAlert', type)
    }
  },
  watch: {
    '$nuxt.isOffline' () {
      if (this.$nuxt.isOffline) {
        this.$store.commit('alerts/addAlert', { message: 'Your system is offline', type: 'OFFLINE', class: 'is-danger' })
        setTimeout(() => this.removeAlert('OFFLINE'), 3000)
      }
    },
    '$nuxt.isOnline' () {
      if (this.$nuxt.isOnline) {
        this.$store.commit('alerts/addAlert', { message: 'You are back online', type: 'ONLINE', class: 'is-success' })
        setTimeout(() => this.removeAlert('ONLINE'), 3000)
      }
    }
  }
}
</script>

<style scoped>
#alert-container {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
