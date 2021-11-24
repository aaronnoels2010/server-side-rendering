import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { StatOverview } from '~/models/stats/stat-overview'
import { Stat } from '~/models/stats/stat'

export const state = function () {
  return {
    pagination: {
      limit: 25,
      offset: 0
    },
    stats: [],
    stat: undefined
  }
}

export const mutations = {
  next (state: any) {
    state.pagination.offset += state.pagination.limit
  },
  previous (state: any) {
    if (state.pagination.offset !== 0) {
      state.pagination.offset -= state.pagination.limit
    }
  },
  setStats (state: any, stats: StatOverview[]) {
    state.stats = stats
  },
  setStat (state: any, stat: Stat) {
    state.stat = stat
  }
}

export const actions = {
  async getNextStats (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('next')
    await context.dispatch('getStats', { $axios, error })
  },
  async getPreviousStats (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('previous')
    await context.dispatch('getStats', { $axios, error })
  },
  async getStats (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    const { limit, offset } = context.state.pagination
    const response = await $axios.get<StatOverview[]>('/stats', { params: { limit, offset } })
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setStats', response.data.results)
  },
  async getStatByNameAction (context: any, { $axios, statName, error }: {$axios: NuxtAxiosInstance, statName: string, error: any}) {
    const response = await $axios.get<Stat>(`/stats/by/name/${statName}`)
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setStat', response.data)
  }
}
