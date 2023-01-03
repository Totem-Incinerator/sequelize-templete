const {check} = require('express-validator')
const {validateErrors} = require('../middlewares/fieldsValidate')
const {roleExists, userExists} = require('../helpers/databaseValidations')

const createUserValidator = [ 
    check('email', 'email is required').trim().isEmail().notEmpty(),
    check('email').custom(userExists),
    check('password', 'password is required').trim().notEmpty().isLength({min: 5}),
    check('role', 'role is required').custom(roleExists).notEmpty(),
    validateErrors
]


module.exports = {
    createUserValidator
}
