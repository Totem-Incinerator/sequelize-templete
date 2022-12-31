const {Router} = require('express')
const router = Router()

const {getAll, create} = require('../controllers/userController')


// get all
router.get('/', [], getAll)

router.post('/', [], create)

module.exports = router