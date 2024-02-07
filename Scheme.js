const mongoose = require('mongoose')

const DeatailSchema = new mongoose.Schema({
    serialNumber : Number,
    seriesOrMovieName : String,
    villainName : String,
    actions : String,
    villainImgLink : String,
    posterLink : String
})

const Modal = mongoose.model('incorrect cartoon character', DeatailSchema)
module.exports = Modal