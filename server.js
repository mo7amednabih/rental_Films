const winston = require('winston');
const express = require('express');
const app = express();


require('./startUp/logging');
require('./startUp/db');
require('./startUp/app')(app);
require('./startUp/config')();

const port = process.env.PORT || 3000;
app.listen(
    port,()=> winston.info(`listening in port ${port} `)
)
