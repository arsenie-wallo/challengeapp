import { MongoDatabase } from './db.js'

export class Employee {
    constructor() {
        this.handler = new MongoDatabase()
    }

    async get(event) {
        try {
            await this.handler.connect(); 
            const employeeCollection = this.handler.db.collection('employees');
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
    }

    async view(event) {
        const { employeeId } = event.pathParameters;
        console.log(`ID: ${employeeId}`)
    
        try {
            await this.handler.connect();  
            const employeeCollection = this.handler.db.collection('employees');  
            const employees = await employeeCollection.findOne({ _id: employeeId })
            
    
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
    }

    async delete(event) {
        const { employeeId } = event.pathParameters;
        console.log(`ID: ${employeeId}`)

        try {
            await this.handler.connect();
            const employeeCollection = this.handler.db.collection('employees');
            const employees = await employeeCollection.deleteOne({ _id: employeeId })
            console.log(employees)

            return {
                statusCode: 200,
                body: JSON.stringify(employees),
            };
        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to delete employee' }),
            };
        } 
    }

    // async editEmployee(event) {

    // }

    // async create(event) {
    //     const { employeeId } = event.pathParameters;
    //     console.log(`ID: ${employeeId}`)

    //     try {
    //         await this.handler.connect();
    //         const employeeCollection = this.handler.db.collection('employees');
    //         const employees = await employeeCollection.insertOne({ _id: employeeId })

    //         return {
    //             statusCode: 200,
    //             body: JSON.stringify(employees),
    //         };
    //     } catch (error) {
    //         console.error(error);
    //         return {
    //             statusCode: 500,
    //             body: JSON.stringify({ error: 'Failed to insert department' }),
    //         };
    //     } 
    // }

    async create(event) {
        try {
            console.log("Parsing employee data...")
            const { _id, email, name, address, department, line_manager } = JSON.parse(event.body);

            console.log('Employee ID:', _id);
            console.log('Email:', email);
            console.log('Employee Name:', name);
            console.log('Address:', address);
            console.log('Department:', department);
            console.log('Line Manager:', line_manager);

            return {
                statusCode: 201,
                body: JSON.stringify({
                    message: 'Employee created successfully',
                    _id,
                    email,
                    name,
                    address,
                    department,
                    line_manager
                }),
            }
        } catch (error) {
            console.error('Error:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Failed to create employee',
                    error: error.message
                }),
            };
        }
    }
}
