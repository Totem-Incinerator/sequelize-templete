const {Router} = require('express')
const router = Router()
const { createUserValidator } = require('../validators/userValidator')

const {getAll, createUsers} = require('../controllers/userController')


// get all
router.get('/', [], getAll)

// create userValidator
router.post('/', createUserValidator, createUsers)

module.exports = router
