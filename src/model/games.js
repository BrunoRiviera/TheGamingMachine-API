const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    title: {
        type: String,
        required: true,
        validate(value) {
            if (value.lenght > 30){
                throw new Error(`cant create titles with more than 30 characters`)
            }
        }
    },
    alt: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: { 
        type: String,
        required: true
    },
    href: { 
        type: String,
        required: true
    }
});


module.exports = Game;