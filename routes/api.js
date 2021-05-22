const express = require('express');
const router = express.Router();

const { getCharacters, addCharacter } = require('../controllers/characters.controller');
const { getPsiPowersNames, getPsiPowers, seedPsiPowers } = require('../controllers/psiPowers.controller');

/*
----------------------
Proof of life endpoint
----------------------
*/
router.get('/', (req, res, next) => res.json(' API is alive \u{1F35E} \u{1F5A5}'));

/*
----------------------
Powers endpoint
----------------------
*/
router.get('/powers/names', getPsiPowersNames);
router.get('/powers', getPsiPowers);
// router.post('/powers/seed', seedPsiPowers);

/*
---------------------------
Characters endpoint
---------------------------
*/
router.get('/characters', getCharacters);
router.post('/character', addCharacter);

module.exports = router;
