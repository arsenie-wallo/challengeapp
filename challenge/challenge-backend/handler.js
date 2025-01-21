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
   return employee.create(event)
}

export async function createDepartment(event) {
    return department.create(event)
}
