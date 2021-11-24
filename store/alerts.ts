export const state = function () {
  return {
    alerts: []
  }
}

export const mutations = {
  addAlert (state: any, alert: Alert) {
    console.log('Alert')
    console.log(alert)
    state.alerts = [...state.alerts, alert]
  },
  removeAlert (state: any, type: String) {
    state.alerts = state.alerts.filter((value: Alert) => value.type !== type)
  }
}

export const actions = {
}

interface Alert {
  context: String
  message: String,
  type: String
}
