const User = require('../models/user')
const Role = require('../models/role')

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

const roleExists = async(role = '') => {

    if(role.length == 0){
	throw new Error('role is empty')
    }

    const roleValidate = await Role.findOne({
	where: {role_name: role}
    })

    if(!roleValidate){
	throw new Error('role does not exists')
    }

}


module.exports = {
    userExists,
    roleExists
}
