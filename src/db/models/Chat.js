const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    
},{
    timestamps: true
})

module.exports = mongoose.model('Chat', chatSchema);