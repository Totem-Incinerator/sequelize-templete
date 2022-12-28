const User = require('../models/user.js')
const passwordEncryption = require('../helpers/passwordEncryption')

const createUser = async(data = {}) => {

    // encrypt password
    data.password = passwordEncryption(data.password)

    const user = await User.create(data)

    try{
        user.save();
    }catch(error){
        console.log(error)
        throw new Error(error.msg)
    }

}
const user = {email:"jotaceron@hotmail.com"}
createUser(user)