"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _nodemodel = require('../models/node.model');



 class NodeRepository {

  

  constructor(model) {
    this._model = model
  }

  async load(id) {
    const model = await this.findOne(id)
    this._model = model
    return model
  }

  find(options) {
    return _nodemodel.Node.findAll(options)
  }

  findOne(id) {
    return _nodemodel.Node.findByPk(id)
  }

  create(item) {
    return _nodemodel.Node.create(item)
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
} exports.NodeRepository = NodeRepository;
