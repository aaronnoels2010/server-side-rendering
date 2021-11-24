import { Request, Response } from 'express'
import { ApiError } from '../models/error'

const express = require('express')
const router = express.Router()
const Pokedex = require('pokedex-promise-v2')
const P = new Pokedex()

router.get('/', async function (request: Request, res: Response) {
  const { limit, offset } = request.query
  const locationsList = await P.getLocationsList({ limit, offset })
  res.send(locationsList)
})

router.get('/by/name/:name', async function (req: Request, res: Response) {
  const location = await P.getLocationByName(req.params.name).catch(() => {
    res.status(404)
    res.send(new ApiError(`No location found for ${req.params.name}`, 404))
  })
  res.send(location)
})

module.exports = router
