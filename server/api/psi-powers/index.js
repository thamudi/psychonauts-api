import psiPowers from 'assets/data/psi_powers.json'

export default defineEventHandler(async(event)=>{
  const validatedQuery = validQuery(getQuery(event))
  if (!validatedQuery.valid) {
    return {
      message: validatedQuery.message,
    }
  }

  const { limit, name } = getQuery(event)
  let returnedQuery = psiPowers;


  if (name) {
    returnedQuery = returnedQuery.filter(
      (character) => character.name.indexOf(name.toLowerCase()) >= 0
    )

    if (returnedQuery.length) return returnedQuery
    return { message: `no record was found for the character ${name}` }
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

const validLimit = (limit) => {
  if (!Number(limit)) return false
  return true
}

const validName = (name) => {
  if (Number(name)) return false
  return true
}
