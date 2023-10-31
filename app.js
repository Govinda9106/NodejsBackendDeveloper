const mongoConnect = require('./mongoDB/database.js');
const errorLogger = require('./errorLog/error.js');
const router = require('./src/routes.js');
const express = require('express');
require('dotenv');


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 9000;

app.use(router);
app.use(errorLogger);

async function startServer(){
    await mongoConnect();
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    })
}

startServer();

module.exports =  app;


