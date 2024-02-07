#!/bin/bash
mongoimport --host mongo_db --db psychonauts-api --collection characters --type json --file /psychonauts-api.characters.json --jsonArray && mongoimport --host mongo_db --db psychonauts-api --collection psi_powers --type json --file /psychonauts-api.psi_powers.json --jsonArray
