const {User} = require('../models/user')


let auth = (req, res, next) => {
    let token = req.cookies.token
    User.findByToken(token, (err, user) =>{
        if(err) throw err;
        if(!user) return res.status(403).json({isAuth: false, error: true})
        req.token = token
        req.user = user
        next();

    })
}

module.exports = {auth};