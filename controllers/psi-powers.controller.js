'use strict';

const psiPowers = require('../data/psi-powers.json');


/*
-------------------------------------
-------------------------------------
Returns an array of psi powers names 
-------------------------------------
-------------------------------------
*/
exports.getPsiPowers = (request, response) => {
    return response.json(psiPowers['psi-powers'].map(power => power.name.toLocaleLowerCase()));
};