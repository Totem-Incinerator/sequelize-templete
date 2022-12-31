const {DataTypes} = require('sequelize')
const {db} = require('../database/dbconfig')
const Role = require('./role')

const User = db.define('User', {
  email:{
    type: DataTypes.STRING,
    validate: {isEmail: true},
    unique: true
  },
  password:{
    type: DataTypes.STRING
  },
  role_id:{
    type: DataTypes.INTEGER,
    references: 'Roles'
  }
})


module.exports = User