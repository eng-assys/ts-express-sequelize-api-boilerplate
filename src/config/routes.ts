import { Request, Response } from "express"
import { NodeController } from "../controllers/nodes.controller"
import { LinkController } from "../controllers/links.controller"

export class Routes {
  private _nodeController: NodeController = new NodeController()
  private _linkController: LinkController = new LinkController()

  public routes(app): void {

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
}