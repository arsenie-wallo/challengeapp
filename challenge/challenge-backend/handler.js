import { MongoDatabase } from './handler_files/db.js'
import { Employee } from './handler_files/employee.js'
import { Department } from './handler_files/department.js'


const handler = new MongoDatabase()
const employee = new Employee()
const department = new Department()

export async function getDashboard(event) {
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
}

export async function getDepartments(event) {
    return department.get()
}

export async function getEmployees(event) {
    return employee.get()
}


export async function viewDepartment(event) {
    return department.view(event)
}

export async function viewEmployee(event) {
    return employee.view(event)
}


export async function deleteEmployee(event) {
    return employee.delete(event)
}

export async function deleteDepartment(event) {
    return department.delete(event)
}


export async function createEmployee(event) {
    employee.create(event)
}

export async function createDepartment(event) {
    return department.create(event)
    // try {
    //     // Extract employee details from the request body
    //     const { _id, name, line_manager } = JSON.parse(event.body);

    //     if (!_id || !name || !line_manager) {
    //         return {
    //             statusCode: 400,
    //             body: JSON.stringify({ error: 'Missing required fields (_id, name, line_manager)' }),
    //         };
    //     } 
    //     else {
    //         console.log(`${_id}`)
    //         console.log(`${name}`)
    //         console.log(`${line_manager}`)
    //     }

    //     // Pass the event to the create method to handle MongoDB insertion
    //     const result = await employee.create({ _id, name, line_manager });

    //     return {
    //         statusCode: 201,  // Created
    //         body: JSON.stringify(result),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ error: 'Failed to create employee' }),
    //     };
    // }
}
