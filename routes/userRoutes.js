const {Router} = require('express')
const router = Router()
const { createUserValidator, updateUserValidator } = require('../validators/userValidator')

const {getAll, createUsers, updateUser, deleteUser} = require('../controllers/userController')


// get all
router.get('/', [], getAll)

// create user
router.post('/', createUserValidator, createUsers)

// update user
router.put('/:id', updateUserValidator, updateUser)

// delete user
router.delete('/:id', deleteUser)

module.exports = router
