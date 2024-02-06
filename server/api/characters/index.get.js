export default defineEventHandler(async (event) => {
  try {
    const numberOfQueries = Object.keys(getQuery(event)).length

    if (numberOfQueries === 0) {
      return await getAllCharacters()
    } else {
      return await getCharactersByQuery(getQuery(event))
    }
  } catch (error) {
    return {
      status: 500,
      message: 'Something went wrong',
      error: error.message,
    }
  }
})

/**
 * Gets all characters from the DB
 *
 * @returns CharacterSchema
 */
const getAllCharacters = async () => {
  try {
    return await CharacterSchema.find({})
  } catch (error) {
    return {
      status: 500,
      message: 'Error fetching characters from the database',
      error: error.message,
    }
  }
}

const getCharactersByQuery = async (queryObject) => {
  const { limit, gender, name } = queryObject
  let response
  for (const key in queryObject) {
    switch (key) {
      case 'limit':
        try {
          response = await CharacterSchema.find({}).limit(Number(limit))
        } catch (error) {
          response = {
            status: 500,
            message: 'Error fetching characters from the database',
            error: error.message,
          }
        }
        break

      case 'gender':
        try {
          response = await CharacterSchema.find({gender: gender}).limit(Number(limit))
        } catch (error) {
          response = {
            status: 500,
            message: 'No data available on characters with that gender',
            error: error.message,
          }
        }
        break

      case 'name':
        try {
         return response = await CharacterSchema.findOne(
            { name: { $regex: name, $options: 'i' } } 
          )
        } catch (error) {
          return response = {
            status: 500,
            message: `Couldn\`t find the character named ${name}`,
            error: error.message,
          }
        }
        break
      default:
        break
    }
  }
  return response
}
