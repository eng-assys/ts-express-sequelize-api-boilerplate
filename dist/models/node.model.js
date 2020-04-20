"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');
var _database = require('../config/database');
var _linkmodel = require('./link.model');

 class Node extends _sequelize.Model {
  
  
  
  
} exports.Node = Node;





Node.init(
  {
    id: {
      type: _sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new _sequelize.DataTypes.STRING(128),
      allowNull: false
    }
  },
  {
    tableName: "nodes",
    sequelize: _database.database // this bit is important
  }
)

Node.hasMany(_linkmodel.Link, {
  sourceKey: "id",
  foreignKey: "fromId",
  as: "previousLinks"
})

Node.hasMany(_linkmodel.Link, {
  sourceKey: "id",
  foreignKey: "toId",
  as: "nextLinks"
})

// Node.sync({ force: true }).then(() => console.log("Node table created"))