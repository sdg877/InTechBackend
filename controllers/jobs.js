import Job from '../models/job.js'; // Update the path accordingly

const JobController = {
  getAllJobs: async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getJobById: async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
      res.status(200).json(job);
    } catch (error) {
      console.error('Error fetching job by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createJob: async (req, res) => {
    try {
      const newJob = new Job(req.body);
      const savedJob = await newJob.save();
      res.status(201).json(savedJob);
    } catch (error) {
      console.error('Error creating job:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateJob: async (req, res) => {
    try {
      const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedJob) {
        return res.status(404).json({ error: 'Job not found' });
      }
      res.status(200).json(updatedJob);
    } catch (error) {
      console.error('Error updating job:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteJob: async (req, res) => {
    try {
      const deletedJob = await Job.findByIdAndDelete(req.params.id);
      if (!deletedJob) {
        return res.status(404).json({ error: 'Job not found' });
      }
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      console.error('Error deleting job:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default JobController;