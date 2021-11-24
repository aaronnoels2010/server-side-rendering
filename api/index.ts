import { NextFunction, Request, Response } from 'express'
import { auth } from 'express-oauth2-jwt-bearer'
import { ApiError } from './models/error'

const express = require('express')

const bodyParser = require('body-parser')

const abilities = require('./abilities')
const berries = require('./berries')
const configuration = require('./configuration')
const generations = require('./generations')
const locations = require('./locations')
const moves = require('./moves')
const search = require('./search')
const stats = require('./stats')

const app = express()

app.use(bodyParser.json())

app.use(function timeLog (request: Request, __: Response, next: NextFunction) {
  const timestamp = new Date(Date.now())
  console.log(`API request to ${request.url} on ${timestamp.toDateString()} time ${timestamp.toTimeString()}`)
  next()
})

app.use('/configuration', configuration)

app.use(auth({
  audience: `${process.env.AUTH0_AUDIENCE}`,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`
}))

app.use('/abilities', abilities)
app.use('/berries', berries)
app.use('/generations', generations)
app.use('/locations', locations)
app.use('/moves', moves)
app.use('/search', search)
app.use('/stats', stats)

app.get('*', function (request: Request, response: Response) {
  response.status(404)
  response.send(new ApiError(`No API endpoint found for ${request.url}`, 404))
})

module.exports = app
