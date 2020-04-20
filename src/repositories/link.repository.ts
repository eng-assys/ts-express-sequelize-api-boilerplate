import { Link, LinkInterface } from '../models/link.model'

import {UpdateOptions, DestroyOptions } from "sequelize"

export class LinkRepository {

  protected _model: Link

  constructor(model?: Link) {
    this._model = model
  }

  async load(id: number) {
    const model = await this.findOne(id)
    this._model = model
    return model
  }

  find(options?): Promise<Link[]> {
    return Link.findAll(options)
  }

  findOne(id: number): Promise<Link> {
    return Link.findByPk(id)
  }

  create(item: LinkInterface): Promise<Link> {
    return Link.create(item)
  }

  update(id: number, item: LinkInterface): Promise<Link> {

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
