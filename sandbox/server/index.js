const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');


const app = express()
app.use(cors())
app.use(express.json())

// Connection
mongoose.connect('mongodb://localhost:27017/')

// mongodb://localhost:27017/

// Schema and Model
const DepartmentSchema = mongoose.Schema({
    _id: String,
    name: String,
    line_manager: String
})

const DepartmentModel = mongoose.model("department", DepartmentSchema)



// REST API endpoint
app.get("/departments", (req, res) => {
    DepartmentModel.find({
    }).then(function(departments){
        res.json(departments)
    }).catch(function(err) {
    console.log(err)
})
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})