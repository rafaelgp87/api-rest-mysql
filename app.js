'use strict'

const express = require('express')
const pug = require('pug')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const restFul = require('express-method-override')('_method')
const routes = require('./routes/team-router.js')
const favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`)
const publicDir = express.static(`${__dirname}/public`)
const viewDir = `${__dirname}/views`
const port = (process.env.PORT || 3000)

let app = express()

app
  .set( 'views', viewDir )
  .set( 'view engine', 'pug' )
  .set( 'port', port )

  .use( bodyParser.json() )
  .use( bodyParser.urlencoded({ extended: false }) )
  .use( publicDir )
  .use( favicon )
  .use( morgan('dev') )
  .use( restFul )
  .use( routes )

module.exports = app;
