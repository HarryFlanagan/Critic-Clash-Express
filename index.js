import mongoose from 'mongoose'
import reviews from './/routes/reviews'

import cors from 'cors';

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 8080

const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.c3ttr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//mongodb://localhost:27017/test4DB

mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/test4DB', {
    "userNewURlParser": true,
    "useUnifiedTopology": true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected')
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/reviews', reviews)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))








