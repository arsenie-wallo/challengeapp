import { MongoDatabase } from './db.js'

export class Department {
    constructor() {
        this.handler = new MongoDatabase()
    }

    async get(event) {
        try {
            await this.handler.connect(); 
            const departmentCollection = this.handler.db.collection('departments');
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
    }

    async view(event) {
        const { departmentId } = event.pathParameters;
        console.log(`ID: ${departmentId}`)
    
        try {
            await this.handler.connect();  
            const departmentCollection = this.handler.db.collection('departments');  
            const departments = await departmentCollection.findOne({ _id: departmentId })
            
    
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
    }

    async delete(event) {
        const { departmentId } = event.pathParameters;
        // console.log(`ID: ${departmentId}`)

        try {
            await this.handler.connect();
            const departmentCollection = this.handler.db.collection('departments');
            const departments = await departmentCollection.deleteOne({ _id: departmentId })
            console.log(departments)

            return {
                statusCode: 200,
                body: JSON.stringify(departments),
            };
        } catch (error) {
            console.error(error);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Failed to delete department' }),
            };
        } 
    }

    // async editDepartment(event) {

    // }

    
    // async create(event) {
    //     const { departmentId } = event.pathParameters;
    //     console.log(`ID: ${departmentId}`)

    //     try {
    //         await this.handler.connect();
    //         const departmentCollection = this.handler.db.collection('departments');
    //         const departments = await departmentCollection.insertOne({ _id: departmentId })
    //         // console.log(departments)

    //         return {
    //             statusCode: 200,
    //             body: JSON.stringify(departments),
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
            console.log("Parsing department data...")
            // const { departmentId } = event.pathParameters;
            const { _id, name, line_manager } = JSON.parse(event.body);

            console.log('Department ID:', _id);
            console.log('Department Name:', name);
            console.log('Line Manager:', line_manager);

            return {
                statusCode: 201,
                body: JSON.stringify({
                    message: 'Department created successfully',
                    _id,
                    name,
                    line_manager
                }),
            }
        } catch (error) {
            console.error('Error:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: 'Failed to create department',
                    error: error.message
                }),
            };
        }
    }
}
