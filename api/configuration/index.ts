import { Request, Response } from 'express'

const express = require('express')
const router = express.Router()

router.get('/', function (_: Request, res: Response) {
  res.json(configuration.navItems)
})

const configuration = {
  navItems: [
    {
      name: 'Abilities'
    },
    {
      name: 'Berries'
    },
    {
      name: 'Generations'
    },
    {
      name: 'Locations'
    },
    {
      name: 'Moves'
    },
    {
      name: 'Pokemons'
    },
    {
      name: 'Stats'
    },
    {
      name: 'Client'
    }
  ]
}

module.exports = router
