require('dotenv').config();
const mongoose = require('mongoose')

// const express = require('express')
// const cors = require('cors');

// MongoDB Schema
// Schema and Model
const DepartmentSchema = mongoose.Schema({
    name: String,
    line_manager: String
})

const Department = mongoose.model('Department', DepartmentSchema);

// Reuse connection for offline mode
let isConnected;

async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    isConnected = mongoose.connection.readyState;
    console.log('Connected to MongoDB');
}


module.exports.dashboard = async (event) => {
    try {
        await connectToDatabase();
        const departments = await Department.find();
        return {
            statusCode: 200,
            body: JSON.stringify(departments),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch items' }),
        };
    }
};
