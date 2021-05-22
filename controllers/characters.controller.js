'use strict';

const Character = require('../models/character.model');
const psiPowersJson = require('../data/psi-powers.json');

/*
--------------------------------------------
--------------------------------------------
Get characters and their info from the DB
- Has the query strings: limit, name, gender

- limit: limit the returned number of
characters 

- name: get a single character by its name

- gender: get back the character based on 
their gender
--------------------------------------------
--------------------------------------------
*/
exports.getCharacters = (request, response) => {

    const numberOfQueries = Object.keys(request.query).length;

    if (numberOfQueries === 0) {
        Character.find((error, characters) => {
            response.json(characters);
        });
    } else {

        const queryObject = request.query;

        const {
            limit,
            gender,
            name
        } = queryObject;

        for (const key in queryObject) {
            switch (key) {
                case 'limit':
                    Character.find((err, characters) => {
                        response.json(characters);
                    }).limit(Number(limit));
                    break;
                case 'gender':
                    Character.find({ gender: gender }, (err, characters) => {
                        response.json(characters);
                    });
                    break;
                case 'name':
                    Character.findOne({ name: { $regex: name, $options: 'i' } }, (err, characters) => {
                        response.json(characters);
                    });
                    break;

                default:
                    break;
            }
        }
    }

};

/*
-------------------------------------
-------------------------------------
Adds a new character to the DB
- Takes the following info to create
a character:

- name: the characters name

- gender: the characters gender 

- psiPowers: an array of powers that
that character uses
-------------------------------------
-------------------------------------
*/
exports.addCharacter = (request, response) => {

    const { name, gender, psiPowers } = request.body;

    Character.findOne({ name }).exec((err, character) => {
        if (character) {
            return response.status(400).json({
                error: 'Character already exists'
            })
        } else {
            const chosenPowers = psiPowers.map(power => {
                return (
                    psiPowersJson['psi-powers'].filter(psiPower => {
                        return psiPower.name.toLocaleLowerCase() === power.toLocaleLowerCase()
                    })[0]
                )
            });

            const newCharacter = new Character({
                name: name,
                gender: gender,
                psiPowers: chosenPowers
            });

            newCharacter.save((err, character) => {
                if (err) {
                    console.log(err);
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
};