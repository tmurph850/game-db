const fs = require("fs");
const bodyParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.listen(3000, () => console.log('Notes app awaiting orders on port 3000!'));
