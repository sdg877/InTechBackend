import 'dotenv/config';
import express, {Router} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import serverless from "serverless-http"

import userRoutes from '../../routes/users.js';
import '../../config/database.js';
import checkToken from '../../config/checkToken.js';


const api = express();

api.use(cors());
api.use(bodyParser.json());

mongoose.connect(process.env.DBURL);

const router = Router()

router.get('/', (req, res) => {
  console.log('inTech');
  res.sendStatus(200);
});

router.use(checkToken);
router.use('/users', userRoutes);

api.use("/api/", router)
export const handler = serverless(api)