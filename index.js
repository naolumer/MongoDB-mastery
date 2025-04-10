import express from 'express';
import connectDB from './db/connectDB.js';
import { deleteById, insertManyDoc } from './models/Movies.js';

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies'

connectDB(DATABASE_URL);
insertManyDoc();
deleteById()

app.listen(port,()=>console.log(`Server is listening 
    on port ${port}`));
