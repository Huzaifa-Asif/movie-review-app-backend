const mongoose = require('mongoose');

const schema = mongoose.Schema;

// Film Schema

const filmSchema = new schema({
    
    name:{
        type: String
    },
    description:{
        type: String
    },
    realeaseDate:{
        type: Date
    },
    rating:{
        type: Number
    },
    ticketPrice:{
        type: Number
    },
    country:{
        type: String,
    },
    genre:{
        type: Array,
    },
    photo:{
        type: String,
    },
  
})


const film= module.exports = mongoose.model('Film',filmSchema);