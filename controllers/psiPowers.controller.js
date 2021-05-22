'use strict';

const psiPowersJson = require('../data/psi-powers.json');
const psiPowersModel = require('../models/psiPower.model')


/*
-------------------------------------
-------------------------------------
Returns an array of psi powers names 
This one will get the data from a 
json file to minimize the request hit
on the database
-------------------------------------
-------------------------------------
*/
exports.getPsiPowersNames = (request, response) => {
    return response.json(psiPowersJson['psi-powers'].map(power => power.name.toLocaleLowerCase()));
};

/*
-------------------------------------
-------------------------------------
Get PSI Powers Info from the DB
- Has the query strings: limit, name

- limit: limit the returned number of
psi Powers 

- name: get a single PSI Power by 
its name
-------------------------------------
-------------------------------------
*/

exports.getPsiPowers = (request, response) => {
    const numberOfQueries = Object.keys(request.query).length;
    if (numberOfQueries === 0) {
        psiPowersModel.PsiPowers.find((error, powers) => {
            response.json(powers);
        });
    } else {
        const queryObject = request.query;

        const {
            limit,
            name
        } = queryObject;

        for (const key in queryObject) {
            switch (key) {
                case 'limit':
                    psiPowersModel.PsiPowers.find((err, characters) => {
                        response.json(characters);
                    }).limit(Number(limit));
                    break;
                case 'name':
                    psiPowersModel.PsiPowers.findOne({ name: { $regex: name, $options: 'i' } }, (err, characters) => {
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
Seed the DB with PSI Powers from the 
JSON file
-------------------------------------
-------------------------------------
*/
exports.seedPsiPowers = (request, response) => {
    response.send(
        psiPowersModel.seedPsiPowers()
    );
};