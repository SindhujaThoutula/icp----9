
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://sindhu:ratna@ds019766.mlab.com:19766/ase9';
MongoClient.connect(url, function(err, db) {

  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

