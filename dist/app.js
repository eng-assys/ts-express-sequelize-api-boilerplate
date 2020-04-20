"use strict";Object.defineProperty(exports, "__esModule", {value: true});const express = require('express')
const cors = require ('cors')
var _routes = require('./config/routes');

class App {
  
   __init() {this.appRoutes = new (0, _routes.Routes)()}

  constructor() {;App.prototype.__init.call(this);
    this.app = express()
    this.middlewares()
    this.appRoutes.routes(this.app)
  }

   middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }
}

exports. default = new App().app