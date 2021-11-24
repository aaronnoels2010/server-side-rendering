import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { GenerationOverview } from '~/models/generations/generation-overview'
import { Generation } from '~/models/generations/generation'

export const state = function () {
  return {
    pagination: {
      limit: 25,
      offset: 0
    },
    generations: [],
    generation: undefined
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
  setGenerations (state: any, generations: GenerationOverview[]) {
    state.generations = generations
  },
  setGeneration (state: any, generation: Generation) {
    state.generation = generation
  }
}

export const actions = {
  async getNextGenerations (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('next')
    await context.dispatch('getGenerations', { $axios, error })
  },
  async getPreviousGenerations (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('previous')
    await context.dispatch('getGenerations', { $axios, error })
  },
  async getGenerations (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    const { limit, offset } = context.state.pagination
    const response = await $axios.get<GenerationOverview[]>('/generations', { params: { limit, offset } })
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setGenerations', response.data.results)
  },
  async getGenerationByNameAction (context: any, { $axios, generationName, error }: {$axios: NuxtAxiosInstance, generationName: string, error: any}) {
    const response = await $axios.get<Generation>(`/generations/by/name/${generationName}`)
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setGeneration', response.data)
  }
}
