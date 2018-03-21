const fs = require("fs");
const bodyParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'gamedb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  app.locals.db = client.db(dbName);
});


const router = require('./router')(app);


app.listen(3000, () => console.log('Notes app awaiting orders on port 3000!'));
