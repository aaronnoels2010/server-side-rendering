import { Request, Response } from 'express'
import { ApiError } from '../models/error'

const express = require('express')
const router = express.Router()
const Pokedex = require('pokedex-promise-v2')
const P = new Pokedex()

router.get('/', async function (request: Request, res: Response) {
  const { limit, offset } = request.query
  const movesList = await P.getMovesList({ limit, offset })
  res.send(movesList)
})

router.get('/by/name/:name', async function (req: Request, res: Response) {
  const move = await P.getMoveByName(req.params.name).catch(() => {
    res.status(404)
    res.send(new ApiError(`No move found for ${req.params.name}`, 404))
  })
  res.send(move)
})

module.exports = router
