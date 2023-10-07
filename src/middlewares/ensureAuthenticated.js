const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

function ensureAuthenticated(req, res, next){
    const authToken = req.headers.authorization.split(' ')[1];
   
    if(!authToken){
        throw new AppError('JWT token is missing', 401);
    }
    console.log(authToken)
    try{
        const { sub: user_id } = verify(authToken, authConfig.jwt.secret);
        req.user = {
            id: Number(user_id),
        };

        return next();
    }catch{
        throw new AppError('Invalid JWT token', 401);
    }
}

module.exports = ensureAuthenticated;