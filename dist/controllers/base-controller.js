"use strict";Object.defineProperty(exports, "__esModule", {value: true});

 class BaseController {

  

  constructor(repository){;BaseController.prototype.__init.call(this);BaseController.prototype.__init2.call(this);BaseController.prototype.__init3.call(this);BaseController.prototype.__init4.call(this);BaseController.prototype.__init5.call(this);
    this._repository = repository
  }

   __init() {this.index = async (req, res) => {
    try {
      const params = req.params
      const response = await this._repository.find(params)
      return res.json(response)
    } catch (error) {
      res.status(500).json({ errors: error })
    }
  }}

   __init2() {this.show = async (req, res) => {
    try {
      const response = await this._repository.findOne(req.params.id)
      return res.json(response)
    } catch (error) {
      res.status(404).json({ message: ["Not found"], errors: error })
    }
  }}

   __init3() {this.store = async (req, res) => {
    try {
      const response = await this._repository.create(req.body)      
      return res.status(201).json(response)
    } catch (error) {
      res.status(500).json({ errors: error })
    }
  }}

   __init4() {this.update = async (req, res) => {
    try {
      const response = await this._repository.update(req.params.id, req.body)
      return res.json(response)
    } catch (error) {
      res.status(500).json({ errors: error })
    }
  }}

   __init5() {this.delete = async (req, res) => {
    try {
      const response = await this._repository.delete(req.params.id, req.body)
      return res.json(response)
    } catch (error) {
      res.status(500).json({ errors: error })
    }
  }}
} exports.BaseController = BaseController;
