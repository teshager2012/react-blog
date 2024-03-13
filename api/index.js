import express from 'express';
import mongoose from 'mongoose';
<<<<<<< HEAD
import dotenv from 'dotenv'
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO).then(
    () => { console.log('MongoDB is connected'); }
=======
const app = express();

mongoose.connect('mongodb+srv://meetteshager:meetmongoose.ifxhcsa.mongodb.net/?retryWrites=true&w=majority&appName=react-blog').then(
    () => { console.log('MongoDB connected') }
>>>>>>> 2c49e218ca6b7900b7c6994b7845ccc36b72873e
    
).catch((err) => {
    console.log(err);
});
app.listen(3000, () => {
    console.log('server is running on port 3000!');
});
