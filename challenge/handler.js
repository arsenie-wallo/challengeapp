require('dotenv').config();
const mongoose = require('mongoose')

// Reuse connection for offline mode
let isConnected;

async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
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

module.exports.employees = async (event) => {
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