import express from 'express';

import bodyParser from 'body-parser';

import userRouters from './routes/users.js';

import mongoose from 'mongoose';

import 'dotenv/config'


const app = express();

const PORT = 5000;

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/users',userRouters);


app.get('/',(res,req) =>{
    req.send("hello from starting");
}
);
mongoose.connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log('Connected!'));

app.listen(PORT, () => console.log(`Running server on http://localhost:${PORT}`));

