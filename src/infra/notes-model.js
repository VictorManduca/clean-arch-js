const { DataTypes } = require('sequelize')
const datasource = require('./datasource')

const notesModel = datasource.define(
  'notes',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    added: {
      type: DataTypes.STRING,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false })

module.exports = notesModel
