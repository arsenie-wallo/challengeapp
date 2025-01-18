require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
let client;
let db;
let isConnected = false;

async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return db;
    }
    // else {
        console.log('Connecting to MongoDB...');
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db('WalloPay');  // Initialize the db object after a successful connection
        isConnected = true;
        console.log('Connected to MongoDB');
    // }
}
//------------------------------------------//
// MongoDB Collections (initialize them inside the handler functions to ensure db is ready)
module.exports.getDepartments = async (event) => {
    try {
        await connectToDatabase();  // Ensure the database is connected before querying
        const departmentCollection = db.collection('departments');  // Access the collection here
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

module.exports.getEmployees = async (event) => {
    try {
        await connectToDatabase();  // Ensure the database is connected before querying
        const employeeCollection = db.collection('employees');  // Access the collection here
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

module.exports.getDashboard = async (event) => {
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
//------------------------------------------//
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
module.exports.viewEmployee = async (event) => {
    const { employeeId } = event.pathParameters;
    console.log(`ID: ${employeeId}`)

    try {
        await connectToDatabase();  // Ensure the database is connected before querying
        const employeeCollection = db.collection('employees');  // Access the collection here
        const employees = await employeeCollection.findOne({ _id: employeeId })//.toArray();
        console.log(employees)

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

module.exports.viewDepartment = async (event) => {
    const { departmentId } = event.pathParameters;
    console.log(`ID: ${departmentId}`)

    try {
        await connectToDatabase();  // Ensure the database is connected before querying
        const departmentCollection = db.collection('departments');  // Access the collection here
        const departments = await departmentCollection.findOne({ _id: departmentId })//.toArray();
        console.log(departments)

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

//------------------------------------------//
module.exports.deleteEmployee = async (event) => {
    // Get the employeeId from path parameters (not from body)
    const { employeeId } = event.pathParameters;
    console.log(`Deleting employee with ID: ${employeeId}`);

    try {
        const db = await connectToDatabase();
        const employeeCollection = db.collection('employees');

        // Delete the employee by their ID (convert string to ObjectId)
        const result = await employeeCollection.deleteOne({ _id: new ObjectId(employeeId) });

        if (result.deletedCount === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Employee not found' }),
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: `Employee with ID ${employeeId} has been deleted` }),
            };
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to delete employee' }),
        };
    }
};

module.exports.deleteDepartment = async (event) => {
    // Get the departmentId from path parameters (not from body)
    const { departmentId } = event.pathParameters;
    console.log(`Deleting department with ID: ${departmentId}`);

    try {
        const db = await connectToDatabase();
        const departmentCollection = db.collection('departments');

        // Delete the department by their ID (convert string to ObjectId)
        const result = await departmentCollection.deleteOne({ _id: new ObjectId(departmentId) });

        if (result.deletedCount === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Department not found' }),
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: `Department with ID ${departmentId} has been deleted` }),
            };
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to delete department' }),
        };
    }
};