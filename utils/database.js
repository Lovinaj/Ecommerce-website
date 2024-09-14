const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;

let db;

const mongoConnect = callback => {
    mongodbClient.connect('mongodb+srv://lovejon:2061@cluster1.qaazg.mongodb.net/ecommerce-app?retryWrites=true&w=majority')
    .then(client => {
        console.log('connected to db')
        db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err)
        throw err;
    });
}

const getDb = () => {
    if (db) {
        return db;
    }
    throw ('No Database Found');
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;