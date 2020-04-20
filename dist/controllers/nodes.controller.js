"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _basecontroller = require('./base-controller');

var _noderepository = require('../repositories/node.repository');

 class NodeController extends _basecontroller.BaseController {
  constructor () {
    const repository = new (0, _noderepository.NodeRepository)()
    super(repository)
  }
} exports.NodeController = NodeController;