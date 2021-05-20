'use strict';

const mongoose = require('mongoose');
const psi_powers = require('./psi_powers.model');

const characterSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        require: true,
        unique: true,
        lowercase: true
    },

    gender: {
        type: String,
        enum: ['male', 'female'],
        lowercase: true,
        default: 'male',
        trim: true
    },

    psi_powers: [psi_powers]

});

characterSchema.methods = {
    // seed characters
    seedCharacters: function () {
        // read from the json file and populate the collection
    }
}

module.exports = mongoose.model('Character', characterSchema);