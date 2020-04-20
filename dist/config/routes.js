"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _nodescontroller = require('../controllers/nodes.controller');
var _linkscontroller = require('../controllers/links.controller');

 class Routes {constructor() { Routes.prototype.__init.call(this);Routes.prototype.__init2.call(this); }
   __init() {this.nodesController = new (0, _nodescontroller.NodesController)()}
   __init2() {this.linksController = new (0, _linkscontroller.LinksController)()}

   routes(app) {

    // Nodes endpoints
    app
      .route("/nodes")
      .get(this.nodesController.index)
      .post(this.nodesController.create)
    
    app
      .route("/nodes/:id")
      .get(this.nodesController.show)
      .put(this.nodesController.update)
      .delete(this.nodesController.delete)

    // Links Endpoints
    app
      .route("/links")
      .get(this.linksController.index)
      .post(this.linksController.create)

    app
      .route("/links/:id")
      .get(this.linksController.show)
      .put(this.linksController.update)
      .delete(this.linksController.delete)
  }
} exports.Routes = Routes;