"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var express = _interopRequireWildcard(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
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
    this.app.use(_cors2.default.call(void 0, ))
  }
}

exports. default = new App().app