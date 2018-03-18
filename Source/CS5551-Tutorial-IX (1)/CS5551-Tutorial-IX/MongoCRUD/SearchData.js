var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://sindhu:ratna@ds019766.mlab.com:19766/ase9';
var findUser = function(db, callback) {
    var cursor =db.collection('demoase').find({"mobile":"123"});
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
            console.log("mob num" + doc.mobile);
        } else {
            callback();
        }
    });
};
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    var database=client.db('ase9');
    findUser(database, function() {
        client.close;
    });
});