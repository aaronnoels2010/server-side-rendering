import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { BerriesOverview, BerryOverview } from '~/models/berries/berries-overview'
import { Berry } from '~/models/berries/berry'

export const state = function () {
  return {
    pagination: {
      limit: 25,
      offset: 0
    },
    berries: [],
    berry: undefined
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
  setBerries (state: any, berries: BerryOverview[]) {
    state.pokemons = berries
  },
  setBerrie (state: any, berry: BerryOverview) {
    state.berry = berry
  }
}

export const actions = {
  async getNextBerries (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('next')
    await context.dispatch('getBerries', { $axios, error })
  },
  async getPreviousBerries (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('previous')
    await context.dispatch('getBerries', { $axios, error })
  },
  async getBerries (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    const { limit, offset } = context.state.pagination
    const response = await $axios.get<BerriesOverview[]>('/berries', { params: { limit, offset } })
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setBerries', response.data.results)
  },
  async getBerrieByNameAction (context: any, { $axios, berryName, error }: {$axios: NuxtAxiosInstance, berryName: string, error: any}) {
    const response = await $axios.get<Berry>(`/berries/by/name/${berryName}`)
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setBerrie', response.data)
  }
}
