import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { LocationOverview } from '~/models/locations/location-overview'
import { Location } from '~/models/locations/location'

export const state = function () {
  return {
    pagination: {
      limit: 25,
      offset: 0
    },
    locations: [],
    location: undefined
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
  setLocations (state: any, locations: LocationOverview[]) {
    state.locations = locations
  },
  setLocation (state: any, location: Location) {
    state.location = location
  }
}

export const actions = {
  async getNextLocations (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('next')
    await context.dispatch('getLocations', { $axios, error })
  },
  async getPreviousLocations (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('previous')
    await context.dispatch('getLocations', { $axios, error })
  },
  async getLocations (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    const { limit, offset } = context.state.pagination
    const response = await $axios.get<LocationOverview[]>('/locations', { params: { limit, offset } })
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setLocations', response.data.results)
  },
  async getLocationByNameAction (context: any, { $axios, locationName, error }: {$axios: NuxtAxiosInstance, locationName: string, error: any}) {
    const response = await $axios.get<Location>(`/locations/by/name/${locationName}`)
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setLocation', response.data)
  }
}
