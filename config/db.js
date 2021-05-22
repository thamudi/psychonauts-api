'use strict';
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async (MONGO_URL) => {
    const connection = await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).catch(error => {
        console.log('=================');
        console.log('An error ocurred');
        console.log('=================');
        console.log(error);
        console.log('=================');
    });
    console.log('======================================');
    console.info(`Mongo DB is connected to: ${connection.connection.host}`);
    console.log('======================================');
}

module.exports = connectDb;