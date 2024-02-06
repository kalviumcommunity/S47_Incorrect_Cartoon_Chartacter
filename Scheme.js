const mongoose = require('mongoose')

const DeatailSchema = new mongoose.Schema({
    SrNo : Number,
    MovieName : String,
    VillanName : String,
    Actions : String,
    VillanImg : String,
    PosterLink : String
})

const Modal = mongoose.model('Incorrect Cartoon character', DeatailSchema)

module.exports = Modal