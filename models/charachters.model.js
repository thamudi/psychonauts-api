'use strict';

const mongoose = require('mongoose');
const psi_powers = require('./psi_powers.model');

const character = new mongoose.Schema({

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
        default: male,
        trim: true
    },

    psi_powers: [psi_powers]

});

module.exports = character;