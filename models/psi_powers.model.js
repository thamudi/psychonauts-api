'use strict';

const mongoose = require('mongoose');

const psi_powers = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        require: true,
        unique: true,
        lowercase: true
    },

    description: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: 'not-found'
    }

});


module.exports = psi_powers;