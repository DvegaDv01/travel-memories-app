import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import cred from './credentials.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
// https://www.mongodb.com/cloud/atlas 

// Connecting to cloud database and setting port. Be sure to protect credentials
const CONNECT_URL = cred
const PORT = process.env.PORT || 5000;

// use mongoose to connect ot database. Use then to create a promise and catch for all errors
mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Ensures no warning messages are returned
//mongoose.set('useFindAndModify', false);

