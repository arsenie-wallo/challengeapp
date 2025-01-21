import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();


export class MongoDatabase {
    constructor() {
        this.uri = process.env.MONGO_URI// || 'mongodb://127.0.0.1:27017'
        if (!this.uri) {
            throw new Error('MongoDB URI is not defined in the environment variables');
        }

        this.client = null
        this.db = null
        this.isConnected = false
    }

    async connect() {
        if (this.isConnected) {
            console.log('Using existing database connection');
            return this.db;
        }
        else {
            console.log('Connecting to MongoDB...')
            this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })
            // try {
                await this.client.connect()
                this.db = this.client.db('WalloPay')
                this.isConnected = true
                console.log('Connected to MongoDB')
        }
    }

    async disconnect() {
        if (this.client) {
            await this.client.close()
            this.isConnected = false
            console.log('Disconnected from MongoDB')
        }
    }
}
