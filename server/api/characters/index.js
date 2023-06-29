import characters from 'assets/data/characters.json'

export default defineEventHandler(async (event) => {
  const validatedQuery = validQuery(getQuery(event))
  if (!validatedQuery.valid) {
    return {
      message: validatedQuery.message,
    }
  }

  const { limit, name, gender } = getQuery(event)
  let returnedQuery = characters

  if (name) {
    returnedQuery = returnedQuery.filter(
      (character) => character.name.indexOf(name.toLowerCase()) >= 0
    )

    if (returnedQuery.length) return returnedQuery
    return { message: `no record was found for the character ${name}` }
  }

  if (gender && gender.toLowerCase() === 'female') {
    returnedQuery = returnedQuery.filter(
      (character) => character.gender.toLowerCase() !== 'male'
    )
  }

  if (gender && gender.toLowerCase() === 'male') {
    returnedQuery = returnedQuery.filter(
      (character) => character.gender.toLowerCase() === 'male'
    )
  }

  const overTheLimit = limit >= returnedQuery.length ? true : false

  if (limit && !overTheLimit) {
    returnedQuery = returnedQuery.slice(0, limit)
  }

  return returnedQuery
})

// TODO: move this to a server middleware

const validQuery = (query) => {
  if (query.gender && !validGender(query.gender))
    return {
      valid: false,
      message: 'gender query value must be either male or female',
    }
  if (query.limit && !validLimit(query.limit))
    return {
      valid: false,
      message: 'limit query value must be a number more than 0',
    }
  if (query.name && !validName(query.name))
    return { valid: false, message: 'name query must be a string' }
  return { valid: true }
}

const validGender = (gender) => {
  const genders = ['male', 'female']
  if (typeof gender !== 'string' || !genders.includes(gender.toLowerCase()))
    return false
  return true
}

const validLimit = (limit) => {
  if (!Number(limit)) return false
  return true
}

const validName = (name) => {
  if (Number(name)) return false
  return true
}
