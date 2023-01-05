const {request, response} = require('express')
const {getUsers, createUser, updateUser} = require('../services/user.service')

const getAll = async(req, res = response) => {
    
    const {limit = 5, offset = 0} = req.query
    
    const {total, users} = await getUsers(limit, offset)

    res.json({
        total,
        users
    })

}

const createUsers = async(req, res = response) => {

    const {email, password, role} = req.body

    const data = {email, password, role}

    try{
        const user = await createUser(data)

        res.status(202).json({
            msg: "user created",
            user
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            msg:"internal error, contact support"
        })
    }

}

const updateUser = async(req, res = response) => {
    const {id} = req.params

    const data = req.body

    try{
	const userUpdate = await updateUser(id, data)

	res.status(200).json({
	    msg:'user updated',
	    user: userUpdate
	})

    }catch(error){
	console.log(error)
	res.status(500).json({
	    msg: 'error, contact admin'
	})

    }
}

module.exports = {
    createUsers,
    getAll,
}
