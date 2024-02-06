import express from 'express';
import jobsController from '../controllers/jobs.js';

const router = express.Router();

router.get('/list', jobsController.getAllJobs);

router.get('/:id', jobsController.getJobById);

router.post('/new', jobsController.createJob);

router.put('/:id', jobsController.updateJob);

router.delete('/:id', jobsController.deleteJob);

export default router;