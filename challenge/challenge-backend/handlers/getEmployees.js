// handlers/getEmployees.js
const connectToDatabase = require('./db');

module.exports = async (event) => {
    try {
        const db = await connectToDatabase();
        const employeeCollection = db.collection('employees');
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

// import { connectToDatabase } from './db'
// import { getCollection } from '../utils/dbUtils'

// module.exports.getEmployees = async (event) => {
// // export async function getEmployees(event) {
//     try {
//         await connectToDatabase();  // Ensure the database is connected before querying
//         const employeeCollection = await getCollection('employees');  // Access the collection here
//         const employees = await employeeCollection.find().toArray();
//         return {
//             statusCode: 200,
//             body: JSON.stringify(employees),
//         };
//     } catch (error) {
//         console.error(error);
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: 'Failed to fetch employees' }),
//         };
//     }
// }
