'use strict';
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });

const connectDb = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
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