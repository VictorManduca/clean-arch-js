require('dotenv').config()

const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
)

// create table notes (id serial primary key, added varchar(255), author varchar(255) not null, content varchar(255) not null);
const model = sequelize.define("notes", {
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

module.exports = { model }
