import mongoose from 'mongoose';

const { Schema } = mongoose;

const jobSchema = new Schema({
  companyName: String,
  jobTitle: String,
  location: String,
  skills: String,
  salary: Number,
  description: String,
});

const Jobs = mongoose.model('Job', jobSchema);

export default Jobs;
