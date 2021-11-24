import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { MoveOverview } from '~/models/moves/move-overview'
import { Move } from '~/models/moves/move'

export const state = function () {
  return {
    pagination: {
      limit: 25,
      offset: 0
    },
    moves: [],
    move: undefined
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
  setMoves (state: any, moves: MoveOverview[]) {
    state.moves = moves
  },
  setMove (state: any, move: Move) {
    state.move = move
  }
}

export const actions = {
  async getNextMoves (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('next')
    await context.dispatch('getMoves', { $axios, error })
  },
  async getPreviousMoves (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    context.commit('previous')
    await context.dispatch('getMoves', { $axios, error })
  },
  async getMoves (context: any, { $axios, error } : {$axios: NuxtAxiosInstance, error: any}) {
    const { limit, offset } = context.state.pagination
    const response = await $axios.get<MoveOverview[]>('/moves', { params: { limit, offset } })
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setMoves', response.data.results)
  },
  async getMoveByNameAction (context: any, { $axios, moveName, error }: {$axios: NuxtAxiosInstance, moveName: string, error: any}) {
    const response = await $axios.get<Move>(`/moves/by/name/${moveName}`)
      .catch((err: Error) => error({ message: err.message, statusCode: 500 }))

    context.commit('setMove', response.data)
  }
}
