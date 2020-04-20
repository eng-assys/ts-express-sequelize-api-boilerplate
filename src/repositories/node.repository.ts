import { Node, NodeInterface } from '../models/node.model'

import {UpdateOptions, DestroyOptions } from "sequelize"

export class NodeRepository {

  protected _model: Node

  constructor(model?: Node) {
    this._model = model
  }

  async load(id: number) {
    const model = await this.findOne(id)
    this._model = model
    return model
  }

  find(options?): Promise<Node[]> {
    return Node.findAll(options)
  }

  findOne(id: number): Promise<Node> {
    return Node.findByPk(id)
  }

  create(item: NodeInterface): Promise<Node> {
    return Node.create(item)
  }

  update(id: number, item: NodeInterface): Promise<Node> {

    const options: UpdateOptions = {
      where: { id },
      limit: 1
    }

    return this._model.update(item, options)
  }

  delete(id: number) {
    const options: DestroyOptions = {
      where: { id },
      limit: 1
    }

    return this._model.destroy(options)
  }
}
