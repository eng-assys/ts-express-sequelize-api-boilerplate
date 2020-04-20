import { BaseController } from './base-controller'

import { NodeRepository } from '../repositories/node.repository'

export class NodeController extends BaseController {
  constructor () {
    super(new NodeRepository())
  }
}