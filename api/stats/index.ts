import { Request, Response } from 'express'
import { ApiError } from '../models/error'

const express = require('express')
const router = express.Router()
const Pokedex = require('pokedex-promise-v2')
const P = new Pokedex()

router.get('/', async function (request: Request, res: Response) {
  const { limit, offset } = request.query
  const statsList = await P.getStatsList({ limit, offset })
  res.send(statsList)
})

router.get('/by/name/:name', async function (req: Request, res: Response) {
  const stat = await P.getStatByName(req.params.name).catch(() => {
    res.status(404)
    res.send(new ApiError(`No stat found for ${req.params.name}`, 404))
  })
  res.send(stat)
})

module.exports = router
