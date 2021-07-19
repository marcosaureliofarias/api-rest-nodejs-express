const mongoose = require('mongoose')
const dotenv = require('dotenv')

mongoose.connect("mongodb+srv://marcos:Samuel@221568@cluster0.npff2.mongodb.net/marcos?retryWrites=true&w=majority", { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose