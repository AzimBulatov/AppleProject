var mongoose = require('mongoose')
var Schema = mongoose.Schema
var appleSchema = new Schema({
title: String,
nick: {
type: String,
unique: true,
required: true
},
avatar: String,
desc: String,
created:{
type:Date,
default:Date.now
}
})
module.exports.Apple = mongoose.model("Apple", appleSchema)
