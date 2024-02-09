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
mongoose.connect(process.env.DBURL);

api.use(cors());
api.use(bodyParser.json());

api.get('/', (req, res) => {
  res.sendStatus(200);
});

const router = Router()

router.use(checkToken);
router.use('/users', userRoutes);

api.use("/api/", router)

export const handler = serverless(api)