const mongoose = require('mongoose')


const connectDatabase = async () => {
    await mongoose
    .connect("mongodb+srv://aldoniq:1wKCpKE2Sk9xi14C@nf-cluster.uwmp17g.mongodb.net/nflecture?retryWrites=true&w=majority")
    .then(() => {
        console.log("Success DB");
    }).catch((e) => {
        console.log(e);
    })
}

module.exports = connectDatabase;