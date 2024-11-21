import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

dotenv.config({
    path: '.env',
})

const app = express();

app.use(cors());
app.use(express.json());


try{
    mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB')
  
}catch(error)
{
    console.error(error);
}

app.use("/book",bookRoute);
app.use("/users",userRoute);


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))