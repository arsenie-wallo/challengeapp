import { MongoDatabase } from './handler_files/db.js'
import { Employee } from './handler_files/employee.js'
import { Department } from './handler_files/department.js'


const handler = new MongoDatabase()
const employee = new Employee()
const department = new Department()

export async function getDepartments(event) {
    return department.get()

    // try {
    //     await handler.connect(); 
    //     const departmentCollection = handler.db.collection('departments'); 
    //     const departments = await departmentCollection.find().toArray();
    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify(departments),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ error: 'Failed to fetch departments' }),
    //     };
    // } 
}

export async function getEmployees(event) {
    return employee.get()
    // try {
    //     await handler.connect(); 
    //     const employeeCollection = handler.db.collection('employees');
    //     const employees = await employeeCollection.find().toArray();
    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify(employees),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ error: 'Failed to fetch employees' }),
    //     };
    // } 
}

export async function viewDepartment(event) {
    return department.view(event)

    // const { departmentId } = event.pathParameters;
    // console.log(`ID: ${departmentId}`)

    // try {
    //     await handler.connect();  
    //     const departmentCollection = handler.db.collection('departments');
    //     const departments = await departmentCollection.findOne({ _id: departmentId })
    //     console.log(departments)

    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify(departments),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ error: 'Failed to fetch departments' }),
    //     };
    // } 
}

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

export async function viewEmployee(event) {
    return employee.view(event)

    // const { employeeId } = event.pathParameters;
    // console.log(`ID: ${employeeId}`)

    // try {
    //     await handler.connect();  
    //     const employeeCollection = handler.db.collection('employees');  
    //     const employees = await employeeCollection.findOne({ _id: employeeId })
        

    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify(employees),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ error: 'Failed to fetch employees' }),
    //     };
    // } 
}



//------------------------------------------//
export async function deleteEmployee(event) {
    return employee.delete(event)

    // const { employeeId } = event.pathParameters;
    // console.log(`ID: ${employeeId}`)

    // try {
    //     await handler.connect();
    //     const employeeCollection = handler.db.collection('employees');
    //     const employees = await employeeCollection.deleteOne({ _id: employeeId })
    //     console.log(employees)

    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify(employees),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ error: 'Failed to delete employee' }),
    //     };
    // } 
}

export async function deleteDepartment(event) {
    return department.delete(event)

    // const { departmentId } = event.pathParameters;
    // console.log(`Deleting ID: ${departmentId}`)

    // try {
    //     await handler.connect(); 
    //     const departmentCollection = handler.db.collection('departments');
    //     const departments = await departmentCollection.deleteOne({ _id: departmentId })
    //     console.log(departments)

    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify(departments),
    //     };
    // } catch (error) {
    //     console.error(error);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({ error: 'Failed to delete department' }),
    //     };
    // } 
}
