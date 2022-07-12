const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if (req.method === "OPTIONS"){
        next()
    }

    try{
        var token = req.headers.authorization
        if (!token){
            return res.status(403).json(
                {
                    message: "token required"
                }
            )
        }
        token = token.split(" ")[1]
        
        const decodeData = jwt.verify(token, 'secret')
        req.user = decodeData
        next()
    }catch(e){
        console.log(e);
    }
}