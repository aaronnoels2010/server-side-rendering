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
