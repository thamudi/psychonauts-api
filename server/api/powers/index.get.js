export default defineEventHandler(async (event) => {
  try {
    const numberOfQueries = Object.keys(getQuery(event)).length

    if (numberOfQueries === 0) {
      return await getAllPowers()
    } else {
      return await getPowersByQuery(getQuery(event))
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
 * Gets all powers from the DB
 *
 * @returns psiPowerSchema
 */
const getAllPowers = async () => {
  try {
    return await psiPowerSchema.find({})
  } catch (error) {
    return {
      status: 500,
      message: 'Error fetching psi powers from the database',
      error: error.message,
    }
  }
}

const getPowersByQuery = async (queryObject) => {
  const { limit, name } = queryObject
  let response
  for (const key in queryObject) {
    switch (key) {
      case 'limit':
        try {
          response = await psiPowerSchema.find({}).limit(Number(limit))
        } catch (error) {
          response = {
            status: 500,
            message: 'Error fetching psi powers from the database',
            error: error.message,
          }
        }
        break

      case 'name':
        try {
         return response = await psiPowerSchema.findOne(
            { name: { $regex: name, $options: 'i' } } 
          )
        } catch (error) {
          return response = {
            status: 500,
            message: `Couldn\`t find the psi power named ${name}`,
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
