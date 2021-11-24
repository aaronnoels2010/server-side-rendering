import { Request, Response } from 'express'
import { ApiError } from '../models/error'

const express = require('express')
const router = express.Router()
const Pokedex = require('pokedex-promise-v2')
const P = new Pokedex()

router.get('/', async function (request: Request, res: Response) {
  const { limit, offset } = request.query
  const berriesList = await P.getBerriesList({ limit, offset })
  res.send(berriesList)
})

router.get('/by/name/:name', async function (req: Request, res: Response) {
  const berry = await P.getBerryByName(req.params.name).catch(() => {
    res.status(404)
    res.send(new ApiError(`No berry found for ${req.params.name}`, 404))
  })
  res.send(berry)
})

module.exports = router
