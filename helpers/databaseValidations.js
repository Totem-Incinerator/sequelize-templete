const User = require('../models/user')

/**
 * 
 * @param {*} email
 * @returns boolean
 */
const userExists = async(email = '') => {

    const user = await User.findOne({
        where: {email: email}
    })

    if(user){
        throw new Error('user already exists')
    }
}

module.exports = {
    userExists
}