import 'dotenv/config';
import express, {Router} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import serverless from "serverless-http"

import userRoutes from './routes/users.js';
import './config/database.js';
import checkToken from './config/checkToken.js';


const api = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DBURL);

const router = Router()

router.get('/', (req, res) => {
  console.log('inTech');
  res.sendStatus(200);
});

router.use(checkToken);
router.use('/users', userRoutes);

router.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});

api.use("/api/", router)
export const handler = serverless(api)