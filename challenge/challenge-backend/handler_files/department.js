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
        console.log(`ID: ${departmentId}`)

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
}
