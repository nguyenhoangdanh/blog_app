import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoutes from './routes/user.route.js'

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000 ')
})


app.use('/api/test', userRoutes)

