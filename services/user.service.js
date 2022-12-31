const User = require('../models/user.js')
const Role = require('../models/role')
const passwordEncryption = require('../helpers/passwordEncryption')

const createUser = async(data = {}) => {

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

const updateUser = async (id = 0, data = {}) => {

    try {
        await User.update(data, {where: {id: id}})
    } catch (error) {
        console.log(error.message)
        throw new Error('error updating user')
    }

}

const deleteUser = async (id = 0) => {

    try{

        await User.destroy({
            where:{
                id: id
            }
        })

    }catch(error){
        console.log(error)
        throw new Error('errordeleting user ', error.message)
    }

}

const getUsers = async(limit = 5, offset = 0) => {
    
    const [users, preTotal] = await Promise.all([
        User.findAll({offset: Number(offset), limit: Number(limit)}),
        User.findAndCountAll()
    ])
    const total = preTotal.count

    return {total, users}
}

module.exports ={
    createUser,
    deleteUser,
    getUsers,
    updateUser
}