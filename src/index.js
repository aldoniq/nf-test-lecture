const app = require('./app')
const dbConnect = require('./config/database')

dbConnect()
app.listen(5000, () => {
    console.log("Server started!!!");
})