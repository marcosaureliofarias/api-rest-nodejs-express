const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

require('./controller/authController')(app)

app.listen(3001)