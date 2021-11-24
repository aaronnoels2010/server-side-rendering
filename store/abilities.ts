import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AbilityOverview } from '~/models/abilities/ability-overview'
import { Ability } from '~/models/abilities/ability'

export const state = function () {
  return {
    pagination: {
      limit: 25,
      offset: 0
    },
    abilities: [],
    ability: undefined
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
  setAbilities (state: any, abilities: AbilityOverview[]) {
    state.abilities = abilities
  },
  setAbility (state: any, ability: Ability) {
    state.ability = ability
  }
}

export const actions = {
  async getNextAbilities (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('next')
    await context.dispatch('getAbilities', { $axios, error })
  },
  async getPreviousAbilities (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('previous')
    await context.dispatch('getAbilities', { $axios, error })
  },
  async getAbilities (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    const { limit, offset } = context.state.pagination
    const response = await $axios.get<AbilityOverview[]>('/abilities', { params: { limit, offset } })
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setAbilities', response.data.results)
  },
  async getAbilityByNameAction (context: any, { $axios, abilityName, error }: {$axios: NuxtAxiosInstance, abilityName: string, error: any}) {
    const response = await $axios.get<Ability>(`/abilities/by/name/${abilityName}`)
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setAbility', response.data)
  }
}
