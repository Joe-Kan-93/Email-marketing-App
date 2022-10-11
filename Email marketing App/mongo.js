const mongoose = require('mongoose');
// require('dotenv').config();
require("dotenv").config({path:'./config/.env'});


module.exports = async () => {
    await mongoose.connect(process.env.DATABASE_URI)
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`,
            );
        })
        .catch(err => {
            console.error('Error connecting to mongo', err);
        });
    return mongoose;
};

const mongo = require('./mongo');

module.exports = async (arg1, arg2, arg3) => {

            await mongo().then(async mongoose => {
                try{
                    console.log('Connected to mongo!!');
                    await command.execute(client, message, args);
                }
                finally{
                    mongoose.connection.close();
                }
            });

};