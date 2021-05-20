const express = require('express');
const router = express.Router();

const { addCharacter } = require('../controllers/characters.controller');
const { getPsiPowers } = require('../controllers/psi-powers.controller');

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
router.get('/powers', getPsiPowers);

/*
---------------------------
Characters endpoint
---------------------------
*/
router.post('/character', addCharacter);

module.exports = router;
