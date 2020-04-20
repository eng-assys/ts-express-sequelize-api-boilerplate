"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _nodescontroller = require('../controllers/nodes.controller');
var _linkscontroller = require('../controllers/links.controller');

 class Routes {constructor() { Routes.prototype.__init.call(this);Routes.prototype.__init2.call(this); }
   __init() {this._nodeController = new (0, _nodescontroller.NodeController)()}
   __init2() {this._linkController = new (0, _linkscontroller.LinkController)()}

   routes(app) {

    // Nodes endpoints
    app.route("/nodes")
      .get(this._nodeController.index)
      .post(this._nodeController.store)
    
    app.route("/nodes/:id")
      .get(this._nodeController.show)
      .put(this._nodeController.update)
      .delete(this._nodeController.delete)

    // Links Endpoints
    app.route("/links")
      .get(this._linkController.index)
      .post(this._linkController.store)

    app.route("/links/:id")
      .get(this._linkController.show)
      .put(this._linkController.update)
      .delete(this._linkController.delete)
  }
} exports.Routes = Routes;