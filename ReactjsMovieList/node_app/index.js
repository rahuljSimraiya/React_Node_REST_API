const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require("./routes");

routes.initialize(app);
const server = require('http').createServer(app);

server.listen(5000);
console.log("server listening on port >> ", 5000, " >> Date >> ", new Date());

