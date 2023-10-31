const mongoose = require('mongoose');

async function mongoConnect() {
    mongoose.connect('mongodb://127.0.0.1:27017/Book', {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then((res) => {
        console.log('Connected');
    }).catch((error) => {
        console.log('Error Occured', error);
    });
}

module.exports = mongoConnect;