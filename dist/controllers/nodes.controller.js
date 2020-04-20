"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _nodemodel = require('../models/node.model');


 class NodesController {
   index(req, res) {
    _nodemodel.Node.findAll({})
      .then((nodes) => res.json(nodes))
      .catch((err) => res.status(500).json(err))
  }

   create(req, res) {
    const params = req.body

    _nodemodel.Node.create(params)
      .then((node) => res.status(201).json(node))
      .catch((err) => res.status(500).json(err))
  }

   show(req, res) {
    const nodeId = req.params.id

    _nodemodel.Node.findByPk(nodeId)
      .then((node) => {
        if (node) {
          res.json(node)
        } else {
          res.status(404).json({ errors: ["Node not found"] })
        }
      })
      .catch((err) => res.status(500).json(err))
  }

   update(req, res) {
    const nodeId = req.params.id
    const params = req.body

    const update = {
      where: { id: nodeId },
      limit: 1
    }

    _nodemodel.Node.update(params, update)
      .then(() => res.status(202).json({ data: "success" }))
      .catch((err) => res.status(500).json(err))
  }

   delete(req, res) {
    const nodeId = req.params.id
    const options = {
      where: { id: nodeId },
      limit: 1
    }

    _nodemodel.Node.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err) => res.status(500).json(err))
  }
} exports.NodesController = NodesController;