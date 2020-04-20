"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 const database = new (0, _sequelize.Sequelize)({
  database: "some_db",
  dialect: "sqlite",
  storage: ":memory:"
}); exports.database = database