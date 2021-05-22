'use strict';

const mongoose = require('mongoose');
const psiPowers = require('./psiPower.model');

/*
-------------------------------------
Character Schema 
-------------------------------------
*/
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

    psi_powers: [psiPowers.psiPowersSchema]

});

/*
-------------------------------------
Module export the generated Character 
model
-------------------------------------
*/
module.exports = mongoose.model('Character', characterSchema);