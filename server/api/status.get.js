import mongoose from 'mongoose'

export default defineEventHandler(() => {
    return mongoose.connection.readyState
})