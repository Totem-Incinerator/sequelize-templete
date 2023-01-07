const User = require('../models/user.js')
const Role = require('../models/role')
const passwordEncryption = require('../helpers/passwordEncryption')

const createUserService = async(data = {}) => {

    data.password = passwordEncryption(data.password)

    try{
        const {id} = await Role.findOne({where:{role_name: data.role}})

        data.role_id = id

        const user = await User.create(data)

        return user.save();
    }catch(error){
        console.log(error)
        throw new Error(error.msg)
    }
}

const findUsersByRoleService = async (roleName = "") => {

    const {id} = await Role.findOne({where: {role_name: roleName}})

    const user = await User.findOne({where:{role_id: id}})

    return user
}

const updateUserService = async (id = 0, data = {}) => {

    if(data.role){
      const {id} = await Role.findOne({where:{role_name:data.role}})
      data.role_id = id
    }
    
    if(data.password){
      data.password = passwordEncryption(data.password)
    }

    try {
        await User.update(data, {where: {id: id}})
    } catch (error) {
        console.log(error.message)
        throw new Error('error updating user')
    }

}

const deleteUserService = async (id = 0) => {

    try{

        await User.destroy({
            where:{
                id: id
            }
        })

    }catch(error){
        console.log(error)
      p
        throw new Error('errordeleting user ', error.message)
    }

}

const getUsersService = async(limit = 5, offset = 0) => {
    
    const [users, preTotal] = await Promise.all([
        User.findAll({offset: Number(offset), limit: Number(limit)}),
        User.findAndCountAll()
    ])
    const total = preTotal.count

    return {total, users}
}

module.exports ={
    createUserService,
    deleteUserService,
    getUsersService,
    updateUserService,
    findUsersByRoleService
}
