const e = require('express');
const Character = require('../models/character.model');


exports.addCharacter = (request, response) => {

    const { name, gender, psi_powers } = request.body;

    Character.findOne({ name }).exec((err, character) => {
        if (character) {
            return response.status(400).json({
                error: 'Character already exists'
            })
        } else {
            const newCharacter = new Character({
                name,
                gender,
                psi_powers
            });

            newCharacter.save((err, character) => {
                if (err) {
                    return res.status(401).json({
                        errors: err
                    });
                } else {
                    return res.json({
                        success: true,
                        message: 'Character Added'
                    });
                }
            });
        }
    });
}