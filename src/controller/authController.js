const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const generateToken = (id, username) => {
    const payload = {
        id,
        username
    }
    return jwt.sign(payload, "secret", {expiresIn: '24h'})
}

class authController{
    async login(req, res){
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})

            if(!user){
                return res.status(400).json({"message": "User doesnt exists"})
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({"message": "password is not valid"})
            }

            const token = generateToken(user._id, user.username)
            return res.json({token})
        } catch (e) {
            console.log(e);
        }
    }

    async registration(req, res){
        try{
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate){
                return res.status(400).json({"message": "User exists"})
            }
            const hashPassword = bcrypt.hashSync(password, 10)
            const user = new User({username,"password": hashPassword})
            await user.save()
            res.status(200).json({"success": user.username})
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new authController()