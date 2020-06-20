const express = require('express');
const dotenv  = require('dotenv');
const { json } = require('express');

/* Routers Files */
const bootcamp = require('./routes/bootcamp');


/* Load ENV variables */
dotenv.config ( { path:'./config/config.env' } );

const app = express();

/* Mount Routers*/
app.use('/api/V1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000

app.listen( PORT, console.log (`Server is running in ${ process.env.NODE_ENV } mode on port ${ PORT }.`) );