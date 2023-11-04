const { Binary } = require('mongodb');
const mongoose = require('mongoose');

const receipeScheme = mongoose.Schema({
    recipename:{
        type:String
    },
    recipeDescription:{
        type:String,
    },
    image:{
        type:String
    }

})
module.exports = mongoose.model('receipe',receipeScheme)