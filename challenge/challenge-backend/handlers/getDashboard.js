// handlers/getDashboard.js
module.exports = async (event) => {
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

// // import { connectToDatabase } from './db'
// // import { getCollection } from '../utils/dbUtils'

// export async function getEmployees(event) {
//     try {
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
