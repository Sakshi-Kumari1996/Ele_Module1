var express = require('express');
var app = express();
var path = require('path');


// viewed at http://localhost:8080
app.use("/public",express.static("Public"));

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});
app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/about.html'));
});
app.get('/k1.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/k1.html'));
});
app.get('/k2.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/k2.html'));
});
app.get('/login.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/login.html'));
});
app.get('/Signup.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/Signup.html'));
});
/*const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'patients';
const insertDocuments = function(db, callback) {
   
   
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');
  app.post('/Signup.html', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var username = req.body.username;
    
    
    var signUpDetails = {
        email: email, 
        password: password,
        username: username,
        
    };

  const db = client.db(dbName); 
  // Get the documents collection
  const collection = db.collection('patientsdata');
  // Insert some documents
  collection.insertOne(signUpDetails).then (
      function(result){
          console.log(result);
          res.sendFile(path.join(__dirname + '/html/index.html'));

      }
  )

    // assert.equal(err, null);
    // assert.equal(3, result.result.n);
    // assert.equal(3, result.ops.length);
    
    });
});
  insertDocuments(db, function() {
    client.close();
  });
}; */
app.listen(8080);