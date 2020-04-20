"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _linkmodel = require('../models/link.model');



 class LinkRepository {

  

  constructor(model) {
    this._model = model
  }

  async load(id) {
    const model = await this.findOne(id)
    this._model = model
    return model
  }

  find(options) {
    return _linkmodel.Link.findAll(options)
  }

  findOne(id) {
    return _linkmodel.Link.findByPk(id)
  }

  create(item) {
    return _linkmodel.Link.create(item)
  }

  update(id, item) {

    const options = {
      where: { id },
      limit: 1
    }

    return this._model.update(item, options)
  }

  delete(id) {
    const options = {
      where: { id },
      limit: 1
    }

    return this._model.destroy(options)
  }
} exports.LinkRepository = LinkRepository;
