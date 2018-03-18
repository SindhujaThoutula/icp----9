var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://sindhu:ratna@ds019766.mlab.com:19766/ase9';

var insertDocument = function(db, callback) {
    db.collection('demoase').insertOne( {
        "fname" : "Sidrah",
        "lname" : "Junaid",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "mobile" : "123",
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"sjhv6@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var database=client.db('ase9');
    insertDocument(database, function() {
        client.close;
    });
});