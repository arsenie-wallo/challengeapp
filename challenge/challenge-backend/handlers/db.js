require('dotenv').config();
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
let client;
let db;
let isConnected = false;

async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    else {
        console.log('Connecting to MongoDB...');
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db('WalloPay');  // Initialize the db object after a successful connection
        isConnected = true;
        console.log('Connected to MongoDB');
    }
}

// MongoDB Collections (initialize them inside the handler functions to ensure db is ready)
// export default {
//     connectToDatabase, 
//     getDb: () => db,
// }

module.exports = connectToDatabase;