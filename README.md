# Psychonauts-api

An Api Tribute to the cult classic game Psychonauts

## Technologies:

- DB: Mongo
- Backend: Express 
- Frontend: React
- Runtime: NodeJs


## Usage:

For now it has two endpoints:

- To get the psi powers:
```
https://psychonauts-api.herokuapp.com/api/powers
```

- To get the charachters:
```
https://psychonauts-api.herokuapp.com/api/characters
```
___

- The `characters` endpoint has the following search queries
- Limit: limits the number of items returned
```
/api/characters?limit=2 
```
- Name: returns an item by its name
```
/api/characters?name=invisibility 
```
- Gender: Returns an array of characters based on their gender
```
/api/characters?gender=female
```
___

- The `powers` endpoint has the following search queries
- Limit: limits the number of items returned
```
/api/powers?limit=2 
```
- Name: returns an item by its name
```
/api/powers?name=invisibility 
```

ex `powers` response: 
```json
[
  {
    "description": "Allows the user to see through the minds of others.",
    "img": "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png",
    "_id": "60a8a18f74e598888ff866a3",
    "name": "clairvoyance",
    "__v": 0
  },
  {
    "description": "Allows the user to confuse enemies.",
    "img": "https://psychonauts-api.herokuapp.com/images/api/confusion.png",
    "_id": "60a8a18f74e598888ff866a4",
    "name": "confusion",
    "__v": 0
  },
  {
    "description": "Allows the user to speak to plants.",
    "img": "",
    "_id": "60a8a18f74e598888ff866a5",
    "name": "herbaphony",
    "__v": 0
  },
  {
    "description": "Allows the user to control the movement of water.",
    "img": "https://psychonauts-api.herokuapp.com/images/api/hydrokinesis.png",
    "_id": "60a8a18f74e598888ff866a6",
    "name": "hydrokinesis",
    "__v": 0
  },
  {
    "description": "Allows the user to turn invisible for a short period of time.",
    "img": "https://psychonauts-api.herokuapp.com/images/api/invisibility.png",
    "_id": "60a8a18f74e598888ff866a7",
    "name": "invisibility",
    "__v": 0
  }
]
```

___

ex `character` response:
```json
{
  "gender": "male",
  "_id": "60a81298b6552566c4ad29a0",
  "name": "razputin aquato",
  "psi_powers": [
    {
      "description": "Allows the user to see through the minds of others.",
      "img": "https://psychonauts-api.herokuapp.com/images/clairvoyance.png",
      "_id": "60a81298b6552566c4ad29a1",
      "name": "clairvoyance"
    },
    {
      "description": "Allows the user to confuse enemies.",
      "img": "https://psychonauts-api.herokuapp.com/images/confusion.png",
      "_id": "60a81298b6552566c4ad29a2",
      "name": "confusion"
    },
    {
      "description": "Allows the user to turn invisible for a short period of time.",
      "img": "https://psychonauts-api.herokuapp.com/images/invisibility.png",
      "_id": "60a81298b6552566c4ad29a3",
      "name": "invisibility"
    },
    {
      "description": "Allows the user to levitate using a levitation ball.",
      "img": "https://psychonauts-api.herokuapp.com/images/levitation.png",
      "_id": "60a81298b6552566c4ad29a4",
      "name": "levitation"
    },
    {
      "description": "Allows the user to strike things down using their mind.",
      "img": "https://psychonauts-api.herokuapp.com/images/marksmanship.png",
      "_id": "60a81298b6552566c4ad29a5",
      "name": "marksmanship"
    },
    {
      "description": "Allows the user to break objects using their mind.",
      "img": "https://psychonauts-api.herokuapp.com/images/psi-punch.jpg",
      "_id": "60a81298b6552566c4ad29a6",
      "name": "psi-punch"
    },
    {
      "description": "Allows the user to set objects on fire using their mind.",
      "img": "https://psychonauts-api.herokuapp.com/images/pyrokinesis.png",
      "_id": "60a81298b6552566c4ad29a7",
      "name": "pyrokinesis"
    },
    {
      "description": "Allows the user to create a psychic shield.",
      "img": "https://psychonauts-api.herokuapp.com/images/shield.png",
      "_id": "60a81298b6552566c4ad29a8",
      "name": "shield"
    },
    {
      "description": "Allows the user to move objects with their mind.",
      "img": "https://psychonauts-api.herokuapp.com/images/telekinesis.png",
      "_id": "60a81298b6552566c4ad29a9",
      "name": "telekinesis"
    }
  ],
  "__v": 0
}
```
