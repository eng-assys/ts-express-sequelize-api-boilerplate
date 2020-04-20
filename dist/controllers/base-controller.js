"use strict";Object.defineProperty(exports, "__esModule", {value: true});

 class BaseController {

  

  constructor(repository){
    this._repository = repository
  }

  async index(req, res) {
    try {
      const params = req.params
      const response = await this._repository.find(params)
      return res.json(response)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async show(req, res) {
    try {
      const response = await this._repository.findOne(req.params.id)
      return res.json(response)
    } catch (error) {
      res.status(404).json({ errors: ["Not found"] })
    }
  }

  async store(req, res) {
    try {
      const response = await this._repository.create(req.body)      
      return res.status(201).json(response)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const response = await this._repository.update(req.params.id, req.body)
      return res.json(response)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async delete(req, res) {
    try {
      const response = await this._repository.delete(req.params.id, req.body)
      return res.json(response)
    } catch (error) {
      res.status(500).json(error)
    }
  }
} exports.BaseController = BaseController;
