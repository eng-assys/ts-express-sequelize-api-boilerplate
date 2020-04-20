import { BaseController } from './base-controller'

import { LinkRepository } from '../repositories/link.repository'

export class LinkController extends BaseController {
  constructor () {
    const repository = new LinkRepository()
    super(repository)
  }
}