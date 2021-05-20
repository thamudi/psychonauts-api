'use strict';
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async (MONGO_URL) => {
    const connection = await mongoose.connect(MONGO_URL, {
        //TODO: check these
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    console.log('======================================');
    console.info(`Mongo DB is connected to: ${connection.connection.host}`);
    console.log('======================================');
}

module.exports = connectDb;