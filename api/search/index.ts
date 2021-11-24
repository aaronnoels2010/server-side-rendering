import { Request, Response } from 'express'
import { ApiError } from '../models/error'

const express = require('express')
const router = express.Router()
const Pokedex = require('pokedex-promise-v2')
const P = new Pokedex()

router.get('/', async function (request: Request, res: Response) {
  const { q } = request.query
  const searchResult = await searchAllResources(q as string)
  if (!searchResult) {
    res.status(404)
    res.json(new ApiError(`No resource found with the name ${q}`, 404))
    return
  }
  res.json(searchResult)
})

async function searchAllResources (search: String) {
  const resourcesList = [
    {
      type: 'pokemons',
      call: async () => await P.getPokemonByName(search)
    },
    {
      type: 'abilities',
      call: async () => await P.getAbilityByName(search)
    },
    {
      type: 'berries',
      call: async () => await P.getBerryByName(search)
    },
    {
      type: 'generations',
      call: async () => await P.getGenerationByName(search)
    },
    {
      type: 'locations',
      call: async () => await P.getLocationByName(search)
    },
    {
      type: 'moves',
      call: async () => await P.getMoveByName(search)
    },
    {
      type: 'stats',
      call: async () => await P.getStatByName(search)
    }
  ]

  return await getResource(resourcesList, search)
}

async function getResource (resources: any[], search: String) {
  for (let i = 0; i < resources.length; i++) {
    try {
      const { type, call } = resources[i]
      return { path: `/${type}/by/name/${search}`, data: await call() }
    } catch (error) {
      // do nothing
    }
  }
  return null
}

module.exports = router
