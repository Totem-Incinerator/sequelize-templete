const {db} = require('../database/dbconfig')
const {DataTypes} = require('sequelize')
const User = require('./user')

const Role = db.define('Role', {
  role_name:{
    type: DataTypes.STRING,
  }
})


module.exports = Role