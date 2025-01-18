// handlers/getDepartments.js
const connectToDatabase = require('./db');

module.exports = async (event) => {
    try {
        const db = await connectToDatabase();
        const departmentCollection = db.collection('departments');
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

// import { connectToDatabase } from './db'
// import { getCollection } from '../utils/dbUtils'


// // module.exports.getDepartments = async (event) => {
// export async function getDepartments(event) {
//     try {
//         await connectToDatabase();  // Ensure the database is connected before querying
//         const departmentCollection = await getCollection('departments');  // Access the collection here
//         const departments = await departmentCollection.find().toArray();
//         return {
//             statusCode: 200,
//             body: JSON.stringify(departments),
//         };
//     } catch (error) {
//         console.error(error);
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: 'Failed to fetch departments' }),
//         };
//     }
// }

