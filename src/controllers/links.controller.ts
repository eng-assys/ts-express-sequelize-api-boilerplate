import { BaseController } from './base-controller'

import { LinkRepository } from '../repositories/link.repository'

export class LinkController extends BaseController {
  constructor () {
    super(new LinkRepository())
  }
}