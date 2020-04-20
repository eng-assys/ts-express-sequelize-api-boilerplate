"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _linkmodel = require('../models/link.model');


 class LinksController {
   index(_req, res) {
    _linkmodel.Link.findAll({})
      .then((links) => res.json(links))
      .catch((err) => res.status(500).json(err));
  }

   create(req, res) {
    const params = req.body;

    _linkmodel.Link.create(params)
      .then((link) => res.status(201).json(link))
      .catch((err) => res.status(500).json(err));
  }

   show(req, res) {
    const linkId = req.params.id;

    _linkmodel.Link.findByPk(linkId)
      .then((link) => {
        if (link) {
          res.json(link);
        } else {
          res.status(404).json({ errors: ["Link not found"] });
        }
      })
      .catch((err) => res.status(500).json(err));
  }

   update(req, res) {
    const linkId = req.params.id;
    const params = req.body;

    const options = {
      where: { id: linkId },
      limit: 1
    };

    _linkmodel.Link.update(params, options)
      .then(() => res.status(202).json({ data: "success" }))
      .catch((err) => res.status(500).json(err));
  }

   delete(req, res) {
    const linkId = req.params.id;
    const options = {
      where: { id: linkId },
      limit: 1
    };

    _linkmodel.Link.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err) => res.status(500).json(err));
  }
} exports.LinksController = LinksController;