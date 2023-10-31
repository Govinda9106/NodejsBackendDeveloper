import mongoConnect from './mongoDB/database.js';
import errorLogger from './errorLog/error.js';
import router from './src/routes.js';
import express from 'express';
import dotenv from 'dotenv';


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


