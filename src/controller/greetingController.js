
class greetingController{
    async hello(req, res){
        try{
            const name = req.query.name
            res.json({"message": `hello ${name}` })
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new greetingController()