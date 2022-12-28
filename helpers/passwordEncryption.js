const bcrypt = require('bcrypt')

const passwordEncryption = (password = '') => {

    const salt = bcrypt.genSaltSync()

    return bcrypt.hashSync(password, salt)
}

module.exports = passwordEncryption