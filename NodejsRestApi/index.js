import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import initialize from './routes/index.js';
import http from 'http';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
limit: '150mb',
extended: true
}));

/**
 * [@Promise : native promises add to mongoose promise variable]
 * @type {[object]}
 */
mongoose.Promise = global.Promise;

/**
 * @description [Connect with mongodb with host and port]
 * @return {[object]}
 */

let connectionString = "mongodb://127.0.0.1:27017/nodeTesk?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";

try {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Mongodb connected');
}
catch (err) {
    console.log(err);
    console.log('Could not connect to MongoDB');
}

initialize(app);
const server = http.createServer(app);

server.listen(5000);
console.log("server listening on port >> ", 5000, " >> Date >> ", new Date());