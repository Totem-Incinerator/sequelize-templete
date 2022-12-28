const {DataTypes} = require('sequelize')
const {db} = require('../database/dbconfig')

const User = db.define('User', {
  email:{
    type: DataTypes.STRING,
    validate: {isEmail: true},
    unique: true
  },
  password:{
    type: DataTypes.STRING
  }
})

module.exports = User