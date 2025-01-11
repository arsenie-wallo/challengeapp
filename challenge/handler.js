require('dotenv').config();
const mongoose = require('mongoose')
// const { MongoClient } = require ('mongodb')

const uri = process.env.MONGO_URI;
// Reuse connection for offline mode
let isConnected;

async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri);
    isConnected = mongoose.connection.readyState;
    console.log('Connected to MongoDB');
}

// MongoDB Schema
// DEPARTMENT: Schema and Model
const DepartmentSchema = mongoose.Schema({
    name: String,
    line_manager: String
})

const Department = mongoose.model('department', DepartmentSchema);

module.exports.getDepartments = async (event) => {
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
            body: JSON.stringify({ error: 'Failed to fetch departments' }),
        };
    }
};

// EMPLOYEE: Schema and Model
const EmployeeSchema = mongoose.Schema({
    _id: String,
    email: String,
    name: String,
    address: String,
    department: String,
    line_manager: String
})

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports.getEmployees = async (event) => {
    try {
        await connectToDatabase();
        const employees = await Employee.find();
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
        // Return a simple text response instead of querying the database
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


/*
require('dotenv').config();
const mongoose = require('mongoose')
// const { MongoClient } = require ('mongodb')
const uri = process.env.MONGO_URI;
// Reuse connection for offline mode
let isConnected;

async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri);
    isConnected = mongoose.connection.readyState;
    console.log('Connected to MongoDB');
}

// MongoDB Schema
// DEPARTMENT: Schema and Model
module.exports.getDashboard = async (event) => {
    try {
        // Return a simple text response instead of querying the database
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
// MongoDB Schema
// DEPARTMENT: Schema and Model
const DepartmentSchema = mongoose.Schema({
    name: String,
    line_manager: String
})

const Department = mongoose.model('department', DepartmentSchema);

module.exports.getDepartments = async (event) => {
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
            body: JSON.stringify({ error: 'Failed to fetch departments' }),
        };
    }
};

// EMPLOYEE: Schema and Model
const EmployeeSchema = mongoose.Schema({
    _id: String,
    email: String,
    name: String,
    address: String,
    department: String,
    line_manager: String
})

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports.getEmployees = async (event) => {
    try {
        await connectToDatabase();
        const employees = await Employee.find();
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

*/