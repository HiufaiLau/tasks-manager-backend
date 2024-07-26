import express, {
  Express,
  Request,
  Response,
} from 'express';
import { DataSource } from 'typeorm';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// instantiate express app
const app: Express = express();
dotenv.config();

// parse request body
app.use(bodyParser.json());

// use CORS install types 
app.use(cors());

//create database connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
});

// define sever port
const port = process.env.PORT;

// create a default route
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TS server is running');
});

AppDataSource.initialize().then(() => {
// Start listenng to the requests on the defined port
app.listen(port);
console.log('DataSauce has been initialized.');
}).catch((error) => {
    console.log('Error during initializing DataSauce', error);
});

