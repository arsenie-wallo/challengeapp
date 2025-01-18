
// /*
// // handler.js
// const getDepartments = require('./handlers/getDepartments');
// const getEmployees = require('./handlers/getEmployees');
// const getDashboard = require('./handlers/getDashboard');

// module.exports = {
//     getDepartments,
//     getEmployees,
//     getDashboard,
// };
// */

   /*
// import { getEmployees } from './handlers/getEmployees'
// import { getDepartments } from './handlers/getDepartments'
// import { getDashboard } from './handlers/getDashboard'



// module.exports = {
//     getEmployees,
//     getDepartments,
//     getDashboard
//     }

// handler.js
const getDepartments = require('./handlers/getDepartments');
const getEmployees = require('./handlers/getEmployees');
const getDashboard = require('./handlers/getDashboard');

module.exports = {
    getDepartments,
    getEmployees,
    getDashboard,
};

*/


/*
module.exports.viewEmployee = async (event) => {
    // Get the departmentId from path parameters (not from body)
    const { employeeId } = event.pathParameters;
    
    console.log(`Viewing department with ID: ${employeeId}`);
    //
    try {
        const db = await connectToDatabase();
        const employeeCollection = db.collection('employees');
        console.log(employeeCollection)
        
        // Delete the employee by their ID (convert string to ObjectId)
        const employee = await employeeCollection.findOne({ _id: employeeId });
        
        if (!employee) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Employee not found' }),
            };
        } else {
            return {
        statusCode: 200,
        body: JSON.stringify({ employee }),
    };
}
} catch (error) {
    console.error(error);
    return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to retrieve department details' }),
    };
}
};
*/


/*
module.exports.viewDepartment = async (event) => {
    // Get the departmentId from path parameters (not from body)
    // console.log(event.MONGO_URI)
    const { departmentId } = event.pathParameters;
    console.log(`Viewing department with ID: ${departmentId}`);

    try {
        console.log("Trying...")
        const db = await connectToDatabase();
        const departmentCollection = db.collection('departments');
        console.log(departmentCollection)
        // Delete the department by their ID (convert string to ObjectId)
        const department = await departmentCollection.findOne({ _id: "departmentId" });

        if (!department) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Department not found' }),
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ department }),
            };
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to retrieve department details' }),
        };
    }
};
*/