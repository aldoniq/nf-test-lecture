const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({"extended": false}))
app.use('/api', router)

whitelist=["0.0.0.0"]
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'device-remember-token',
        'Access-Control-Allow-Origin',
        'Origin',
        'Accept'
    ]
};

module.exports = app