const mongoose = require('mongoose')
const Schema = mongoose.schema 

const jobsSchema = new Schema({
    companyName: String,
    jobTitle: String,
    location: String,
    skills: String,
    salary: Number,
    description: String
})

const Jobs = mongoose.model('Jobs', jobSchema)