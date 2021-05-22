'use strict';

const mongoose = require('mongoose');
const psiPowersJson = require('../data/psi-powers.json');

/*
-------------------------------------
PSI Powers Schema 
-------------------------------------
*/
const psiPowersSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        require: true,
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

/*
-------------------------------------
Generate the PSI Power Model
-------------------------------------
*/
const PsiPowers = mongoose.model('psi_powers', psiPowersSchema);

/*
-------------------------------------
-------------------------------------
PSI Power Seed Function
-------------------------------------
-------------------------------------
*/
const seedPsiPowers = async () => {
    // delete all the previous data
    await PsiPowers.deleteMany({}).catch(error => error);

    console.log('Items deleted');

    try {
        // Seed new Powers in the psi_powers collection
        psiPowersJson['psi-powers'].forEach(power => {
            const newPower = new PsiPowers({
                name: power.name,
                description: power.description,
                img: power.img
            });

            newPower.save();
        });

        return 'Data Added';
    } catch (error) {
        return error;
    }

};

/*
-------------------------------------
Module Export
-------------------------------------
*/
module.exports = {
    PsiPowers,
    seedPsiPowers,
    psiPowersSchema
};