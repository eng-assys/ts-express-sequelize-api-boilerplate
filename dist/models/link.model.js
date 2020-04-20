"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');
var _database = require('../config/database');

 class Link extends _sequelize.Model {
  
  
  
  
  
} exports.Link = Link;






Link.init(
  {
    id: {
      type: _sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    fromId: {
      type: _sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    toId: {
      type: _sequelize.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  },
  {
    tableName: "links",
    sequelize: _database.database
  }
)

Link.sync({ force: true }).then(() => console.log("Link table created"))