'use strict';

const Character = require('../models/character.model');
const psiPowers = require('../data/psi-powers.json');


/*
-------------------------------------
-------------------------------------
Adds a new character to the DB
-------------------------------------
-------------------------------------
*/
exports.addCharacter = (request, response) => {

    const { name, gender, psi_powers } = request.body;

    Character.findOne({ name }).exec((err, character) => {
        if (character) {
            return response.status(400).json({
                error: 'Character already exists'
            })
        } else {
            const chosenPowers = psi_powers.map(power => {
                return (
                    psiPowers['psi-powers'].filter(psiPower => {
                        return psiPower.name.toLocaleLowerCase() === power.toLocaleLowerCase()
                    })[0]
                )
            });

            const newCharacter = new Character({
                name: name,
                gender: gender,
                psi_powers: chosenPowers
            });

            newCharacter.save((err, character) => {
                if (err) {
                    return response.status(401).json({
                        errors: err
                    });
                } else {
                    return response.json({
                        success: true,
                        message: 'Character Added'
                    });
                }
            });
        }
    });
}