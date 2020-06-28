const express  = require('express');
const dotenv   = require('dotenv');
const logger   = require('./middleware/logger');
const connectDB = require('./config/db');
const colors = require('colors');

/* Load ENV variables */
dotenv.config ( { path:'./config/config.env' } );

/* Coonect to Mongoose database*/
connectDB();

/* Routers Files */
const bootcamp = require('./routes/bootcamp');

const app = express();

/* Custom Middleware */
app.use(logger);

/* Mount Routers*/
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000

const server = app.listen( PORT, console.log (`Server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }.`.yellow.bold) );

/* Global Handle Unhandled Promise Rejection*/
process.on('unhandledRejection', (err, Promise) => {

    console.log(`Error:${err.message}`.red);
    /* Close server and Exit process*/
    server.close( () =>{ process.exit(1) } );
});