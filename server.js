import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import jobRoutes from './routes/jobs.js';
import userRoutes from './routes/users.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DBURL);

app.get('/', (req, res) => {
  console.log('inTech');
  res.sendStatus(200);
});

app.use('/jobs', jobRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});