const User = require('../models/user.js')
const passwordEncryption = require('../helpers/passwordEncryption')

const createUser = async(data = {}) => {

    data.password = passwordEncryption(data.password)

    const user = await User.create(data)

    try{
        user.save();
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

    const [users, total] = await Promise.all([
        User.findAll({offset, limit}),
        User.findAndCountAll()
    ])

    return {total, users}
}

module.exports ={
    createUser,
    deleteUser,
    getUsers,
    updateUser
}