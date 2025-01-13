require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
let client;
let db;
let isConnected = false;

async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    console.log('Connecting to MongoDB...');
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db('WalloPay');  // Initialize the db object after a successful connection
    isConnected = true;
    console.log('Connected to MongoDB');
}

// MongoDB Collections (initialize them inside the handler functions to ensure db is ready)
module.exports.getDepartments = async (event) => {
    try {
        await connectToDatabase();  // Ensure the database is connected before querying
        const departmentCollection = db.collection('departments');  // Access the collection here
        const departments = await departmentCollection.find().toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(departments),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch departments' }),
        };
    }
};

module.exports.getEmployees = async (event) => {
    try {
        await connectToDatabase();  // Ensure the database is connected before querying
        const employeeCollection = db.collection('employees');  // Access the collection here
        const employees = await employeeCollection.find().toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(employees),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch employees' }),
        };
    }
};

module.exports.getDashboard = async (event) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Hello, this is the dashboard!' }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch dashboard' }),
        };
    }
};
