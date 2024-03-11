import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb+srv://meetteshager:meetmongoose.ifxhcsa.mongodb.net/?retryWrites=true&w=majority&appName=react-blog').then(
    () => { console.log('MongoDB connected') }
    
).catch((err) => {
    console.log(err);
});
app.listen(3000, () => {
    console.log('server is running on port 3000!');
});
